"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('../../path');
const helpers = require("../../../helpers");
const fs = require("../../fs");

function preLink(config) {
    const infoPlistPath = path.ios.infoPlistPath(config);

    // See: https://docs.leanplum.com/changelog/custom-push-notification-swizzling-for-ios
    helpers.logInfo('Disabling method swizzling for iOS Leanplum');
    fs.update(
        infoPlistPath,
        `<dict>`,
        `<dict>
      <key>LeanplumSwizzlingEnabled</key>
      <false/>
      `
    );
    helpers.logInfo('Updating Pod File Swift Version');
    fs.update(
      path.ios.podfilePath(),
      /(platform :ios[\s\S]+?\n)/gm,
      `$1
    ENV['SWIFT_VERSION'] = '5.2'`
    );

    helpers.logInfo('Updating AppDelegate.m to manually call Leanplum notification methods');

    fs.update(
        path.ios.appDelegatePath(config),
        '#import "AppDelegate.h"',
        `#import "AppDelegate.h"\n#import <Leanplum.h>`
    );

    // The following 3 patches are neccessary if swizzling is disabled in Info.plist. It won’t affect SDK if swizzling is enabled.
    fs.update(
        path.ios.appDelegatePath(config),
        `- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}`,
        `- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
      void (^leanplumCompletionHandler)(LeanplumUIBackgroundFetchResult) =  ^(LeanplumUIBackgroundFetchResult result) {
        UIBackgroundFetchResult r = result;
        completionHandler(r);
    };
    [Leanplum didReceiveRemoteNotification:userInfo
fetchCompletionHandler:leanplumCompletionHandler];
}`
    );

    fs.update(
        path.ios.appDelegatePath(config),
        `- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}`,
        `- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    [Leanplum didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}`
    );

    fs.update(
        path.ios.appDelegatePath(config),
        `- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];
}`,
        `- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  // Needs to be called if swizzling is disabled in Info.plist otherwise it won’t affect SDK if swizzling is enabled.
    [Leanplum didFailToRegisterForRemoteNotificationsWithError:error];
}`
    );

}

exports.preLink = preLink;
