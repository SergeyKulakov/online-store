"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = require("../../../helpers");
const path = require("../../path");
const fs = require("../../fs");
const fsnode = require("fs");
const stringsFilePath = `${path.project.path()}/android/app/src/main/res/values/strings.xml`;
const manifestFilePath = `${path.project.path()}/android/app/src/main/AndroidManifest.xml`;
const settingsGradle = `${path.project.path()}/android/settings.gradle`;
const appBuildGradle = `${path.project.path()}/android/app/build.gradle`;
const rootGradle = `${path.project.path()}/android/build.gradle`

function postLink(config) {
  const facebookAppId = config.facebook.appID;
  const facebookClientToken = config.facebook.clientToken;
  
  if (!(config.firebase
    && config.firebase.android
    && config.firebase.android.googleServicesJsonFile)) {
    helpers.logError('firebase.android.googleServicesJsonFile must be specified in project config');

    return process.exit(1);
  }

  const jsonFilePath = path.project.resolve(config.firebase.android.googleServicesJsonFile);
  if (!fsnode.existsSync(jsonFilePath)) {
    fs.copySync(jsonFilePath, path.resolve('android', 'app', 'google-services.json'));
    helpers.logInfo('copied google-services.json into ./android/');
  }

  if (!fs.doesKeywordExist(
    path.project.resolve('android', 'build.gradle'),
    'com.google.gms:google-services'
  )) {
    fs.update(
      path.project.resolve('android', 'build.gradle'),
      /(dependencies {)/,
      `$1
            classpath 'com.google.gms:google-services:4.3.3'`
    );
  }

  if (!fs.doesKeywordExist(
    path.android.gradlePath(),
    'com.google.gms.google-services'
  )) {
    fsnode.appendFileSync(
      path.android.gradlePath(),
      "apply plugin: 'com.google.gms.google-services'"
    );
  }


  if (!fs.doesKeywordExist(
    path.android.gradlePath(),
    `implementation 'com.facebook.android:facebook-android-sdk:latest.release'`
  )) {
    fs.update(
      path.android.gradlePath(),
      /(dependencies {)/,
      `dependencies {
    implementation 'com.facebook.android:facebook-android-sdk:latest.release'`
    );
  }

  
  if (!fs.doesKeywordExist(
    stringsFilePath,
    `    <string name="facebook_app_id">${facebookAppId}</string>`
  )) {
    fs.update(
      stringsFilePath,
      `    <string name="facebook_app_id">__your-fb-app-id__</string>`,
      `    <string name="facebook_app_id">${facebookAppId}</string>
    <string name="facebook_client_token">${facebookClientToken}</string>`
    );
  }

  if (!fs.doesKeywordExist(
    manifestFilePath,
    `<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
    <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>`
  )) {
    fs.update(
      manifestFilePath,
      `<meta-data android:name="com.google.android.gms.wallet.api.enabled" android:value="true" />`,
      `        <meta-data android:name="com.google.android.gms.wallet.api.enabled" android:value="true" />
        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
        <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>`
    );
  }

  fs.update(
    rootGradle,
    /(kotlinVersion = )"\d\.\d\.\d+"/,
    `$1"${config.android.kotlinVersion}"`
  );

  fs.update(
    rootGradle,
    `        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }`,
    `        mavenCentral()
        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }`
  );

  fs.update(
    settingsGradle,
    `include ':app'`,
    `include ':app'
include ':react-native-fbsdk-next'
project(':react-native-fbsdk-next').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fbsdk-next/android')`
  );

  fs.update(
    appBuildGradle,
    `implementation 'com.facebook.android:facebook-android-sdk:latest.release'`,
    `implementation 'com.facebook.android:facebook-android-sdk:latest.release'
    implementation project(':react-native-fbsdk-next')
    implementation 'com.google.firebase:firebase-analytics:17.4.1'
    implementation platform('com.google.firebase:firebase-bom:30.4.1')
    implementation 'com.google.firebase:firebase-analytics'`
  );

  fs.update(
    path.android.mainApplicationPath(config),
    `package ${config.bundleIds.android};`,
    `package ${config.bundleIds.android};
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.shell.MainReactPackage;`
  );

  fs.update(
    path.android.mainApplicationPath(config),
    `public class MainApplication extends NavigationApplication {`,
    `public class MainApplication extends NavigationApplication {
  
    protected List<ReactPackage> getPackages() {
        return Arrays.asList(
                new MainReactPackage(),
                new FBSDKPackage()
        );
    }
`
  );

  fs.update(
    path.project.resolve('android', 'build.gradle'),
    `classpath("com.android.tools.build:gradle:3.5.3")`,
    `classpath("com.android.tools.build:gradle:4.0.1")`
  );
}

exports.postLink = postLink;