#!/usr/bin/env bash

git diff --name-only $TRAVIS_COMMIT_RANGE | grep package.json > /dev/null
PACKAGE_JSON_CHANGED=$?

git diff --name-only $TRAVIS_COMMIT_RANGE | grep env/env > /dev/null
ENV_CHANGED=$?

if [[ ${PACKAGE_JSON_CHANGED} == "0" ]] || [[ ${ENV_CHANGED} == "0" ]]; then
    set -e
    echo 'package.json has been updated, rebuilding binary'

    sudo gem install cocoapods
    pod --version # should be cocoapods 1.6.1+
    time pod repo update

    yarn run init:ios --env=$INIT_ENV $ONLY_DEFAULT

    if test "$TRAVIS_PULL_REQUEST" = "false"; then
        cd ./ios/
        gem install bundler
        pod install --repo-update   
        bundle install
        mkdir -p $HOME/Library/MobileDevice/Provisioning\ Profiles/
        security create-keychain -p travis $KEY_CHAIN
        security default-keychain -s $KEY_CHAIN
        security unlock-keychain -p travis $KEY_CHAIN
        security set-keychain-settings -t 3600 -u $KEY_CHAIN
        yarn run add-keys-ios
        security set-key-partition-list -S apple-tool:,apple: -s -k travis $KEY_CHAIN

        # this tag represents the last commit that was released to appcenter
        CURRENT_TAG="${TRAVIS_BRANCH}_${INIT_ENV}_ios_current-release"

        git fetch --tags

        # determine if the current tag already exists by listing tags of the specified name
        # and performing a line count. note that wc -l pads the result hence the use of sed.
        HAS_CURRENT_TAG=`git tag -l $CURRENT_TAG | wc -l | sed 's/ //g'`

        # check if current tag exists
        if [[ ${HAS_CURRENT_TAG} == "1" ]]; then
          # tag already exists; set the release log to be the history between HEAD and the tag
          RELEASE_NOTES=`git log -n 20 --abbrev-commit --pretty=oneline --no-merges HEAD...$CURRENT_TAG | ../scripts/travis/formatNewlines.js`
        else
          # tag doesn't exist; set the release log to be the full history of the current branch
          RELEASE_NOTES=`git log -n 20 --abbrev-commit --pretty=oneline --no-merges HEAD | ../scripts/travis/formatNewlines.js`

          # create the current tag
          git tag $CURRENT_TAG $TRAVIS_COMMIT
          git push origin refs/tags/$CURRENT_TAG
        fi

        export APPCENTER_DISTRIBUTE_RELEASE_NOTES="${RELEASE_NOTES_EXTRA}"$'\n\n'"${RELEASE_NOTES}"

        fastlane appcenter || exit 1;

        # if new build was successfully created, replace the current tag
        if [[ ${HAS_CURRENT_TAG} == "1" ]]; then
            # delete the current tag locally and remotely
            git tag -d $CURRENT_TAG
            git push origin $TRAVIS_BRANCH :refs/tags/$CURRENT_TAG

            # make a new current tag from the current commit and push to remote
            git tag $CURRENT_TAG $TRAVIS_COMMIT
            git push origin refs/tags/$CURRENT_TAG
        fi
    else
        cd ./ios/
        gem install bundler
        bundle install
        fastlane build;
    fi
else
    echo 'build skipped because package.json was not modified'
    exit 0
fi
