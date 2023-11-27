"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = require("../../../helpers");
const path = require("../../path");
const fs = require("../../fs");

const workSpaceSettings = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
  <plist version="1.0">
  <dict>
    <key>BuildSystemType</key>
    <string>Original</string>
    <key>DisableBuildSystemDeprecationDiagnostic</key>
    <true/>
    <key>PreviewsEnabled</key>
    <false/>
  </dict>
  </plist>
`

function postLink(config) {

  const facebookAppId = config.facebook.appID;
  const facebookClientToken = config.facebook.clientToken;
  const firebaseClientId = config.firebase.google.reservedClientId;

  const podfilePath =  path.ios.podfilePath(config);
  const infoPlistPath = path.ios.infoPlistPath(config);
  const workSpacePath = path.project.path(config) +'/ios/assos.xcworkspace/xcshareddata';

  fs.update(
    path.ios.pbxprojFilePath(config),
    /(IPHONEOS_DEPLOYMENT_TARGET = [\s\S]+?;)/g,
    `IPHONEOS_DEPLOYMENT_TARGET = '11.0';`
  );

  fs.update(
    infoPlistPath,
    /(CFBundleURLSchemes[\s\S]+?array>)/gm,
    `$1
                <string>fb${facebookAppId}</string>
                <string>${firebaseClientId}</string>`
  );

  if (!(config.firebase
    && config.firebase.ios
    && config.firebase.ios.googleServicesPlistFile)) {
    helpers.logError('firebase.ios.googleServicesPlistFile must be specified in project config');

    return process.exit(1);
  }

  fs.copySync(
    config.firebase.ios.googleServicesPlistFile,
    path.resolve(path.ios.nativeProjectPath(config), 'GoogleService-Info.plist')
  );
  helpers.logInfo('copied GoogleService-Info.plist to ./ios/');

  if (!fs.doesKeywordExist(
    path.ios.appDelegatePath(config),
    '#import <Firebase.h>'
  )) {
    fs.update(
      path.ios.appDelegatePath(config),
      '#import "AppDelegate.h"',
      `#import "AppDelegate.h"
#import <Firebase.h>\n#import <RNGoogleSignin/RNGoogleSignin.h>\n#import "RNGoogleSignin.h"`
    );
    fs.update(
      path.ios.appDelegatePath(config),
      /(didFinishLaunchingWithOptions[\s\S]+?{)/,
      `$1
  [FIRApp configure];`
    );
    fs.update(
      podfilePath,
      'inhibit_all_warnings!',
      `inhibit_all_warnings!\n$RNFirebaseAsStaticFramework = true\n
      use_modular_headers!
      # Convert all permission pods into static libraries
      pre_install do |installer|
        installer.pod_targets.each do |pod|
          if pod.name.eql?('RNPermissions') || pod.name.start_with?('Permission-')
            def pod.build_type;
              # Uncomment one line depending on your CocoaPods version
              Pod::BuildType.static_library
            end
          end
        end
      end
      `
    )
    fs.update(
      podfilePath,
      `platform :ios, '10.0'`,
      `platform :ios, '11.0'`
    )

    fs.update(
      podfilePath,
      `pod 'Permission-LocationWhenInUse', :path => "../node_modules/react-native-permissions/ios/LocationWhenInUse.podspec"`,
      `pod 'Permission-LocationWhenInUse', :path => "../node_modules/react-native-permissions/ios/LocationWhenInUse.podspec"
      pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec', :modular_headers => false
      pod 'Firebase/Analytics'`
    )
    
    if (!fs.pathExistsSync(`${workSpacePath}/WorkspaceSettings.xcsettings`)) {
      fs.writeFileSync(`${workSpacePath}/WorkspaceSettings.xcsettings`, workSpaceSettings, err => {
        helpers.logError('Something went wrong updating the workspace settings', err);
      });
      helpers.logInfo('Successfully created workspace settings');
    }
  }

  fs.update(
    infoPlistPath,
    `		<string>Zocial.ttf</string>
	</array>`,
    `		<string>Zocial.ttf</string>
	</array>
  <key>FacebookAppID</key>
  <string>${facebookAppId}</string>
  <key>FacebookClientToken</key>
  <string>${facebookClientToken}</string>
  <key>FacebookDisplayName</key>
  <string>ASSOS</string>`
  )

  fs.update(
      path.ios.appDelegatePath(config),
      '#import <ReactNativeNavigation/ReactNativeNavigation.h>',
      `#import <ReactNativeNavigation/ReactNativeNavigation.h>\n#import <FBSDKCoreKit/FBSDKCoreKit.h>
      \n#import <FBSDKCoreKit/FBSDKCoreKit.h>`
  )

  fs.update(
      path.ios.appDelegatePath(config),
      '- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{',
      `- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [[FBSDKApplicationDelegate sharedInstance] application:application
                       didFinishLaunchingWithOptions:launchOptions];`
  )

  fs.update(
      path.ios.appDelegatePath(config),
      '@implementation AppDelegate',
      `@implementation AppDelegate\n- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
    return YES;
  }

  if ([RCTLinkingManager application:app openURL:url options:options]) {
    return YES;
  }

  if ([RNGoogleSignin application:app openURL:url options:options]) {
    return YES;
  }

  return NO;
}
`
  )
}

exports.postLink = postLink;
