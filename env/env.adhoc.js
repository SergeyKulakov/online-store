const prod = require('./env.prod');

module.exports = {
  ...prod,
  envName: 'adhoc',
  bundleIds: {
    android: 'com.assos.www',
    ios: 'com.assos.www'
  },
  sentryDSN:
    'https://d3dcc25657ec422899717b09af1bed60@o124661.ingest.sentry.io/6476874',
  buildConfig: {
    ios: {
      exportTeamId: '76C7RM43R4',
      appleCert: './signing/adhoc',
      profilesDir: './signing/adhoc',
      distCert: './signing/store/AssosStoreDistCertificates.cer',
      distP12: './signing/store/AssosStoreDistCertificates.p12',
      provisioningProfileName: 'Assos Ad Hoc Profile',
      exportMethod: 'ad-hoc'
    },
    android: {
      storeFile: './signing/assos.keystore',
      keyAlias: 'key0'
    }
  },
  android: {
    build: {
      versionCode: '1'
    },
    kotlinVersion: '1.6.0'
  },
  ios: {
    buildVersion: '1',
    pods: {
      newPods: ["ENV['SWIFT_VERSION'] = '5'"]
    },
    extensions: [
      {
        provisioningProfileName:
          'Assos Ad Hoc Notification Extension Profile',
        bundleExtensionId: 'com.assos.www',
        extensionPath: 'NotificationService',
        displayName: 'AssosAppNotifications',
        plistName: 'NotificationService-Info.plist',
        additionalFiles: [
          {
            newText: 'com.assos.www.notification',
            oldText: '__BUNDLE_IDENTIFIER__',
            paths: ['NotificationService/NotificationService-Info.plist']
          },
          {
            newText: '',
            oldText: /PRODUCT_BUNDLE_IDENTIFIER = ".*$/gm,
            paths: ['assos.xcodeproj/project.pbxproj']
          },
          {
            oldText: `DEVELOPMENT_TEAM='76C7RM43R4' PROVISIONING_PROFILE_SPECIFIER='Assos Ad Hoc Profile'`,
            newText: `DEVELOPMENT_TEAM='76C7RM43R4' MAIN_PROFILE='Assos Ad Hoc Profile' EXT_PROFILE='Assos Ad Hoc Notification Extension Profile'`,
            paths: ['fastlane/Fastfile']
          },
          {
            oldText: /PRODUCT_NAME = assos;/g,
            newText: `PRODUCT_NAME = assos;
            MAIN_PROFILE = "Assos Ad Hoc Profile";
            PROVISIONING_PROFILE_SPECIFIER = $MAIN_PROFILE;`,
            paths: ['assos.xcodeproj/project.pbxproj']
          }
        ],
        frameworks: [
          'System/Library/Frameworks/NotificationCenter.framework',
          'System/Library/Frameworks/Foundation.framework'
        ]
      }
    ]
  },
  appCenter: {
    organization: 'Branding-Brand',
    distribute: {
      appNameIOS: 'Assos-iOS-AdHoc'
    }
  },
  leanplum: {
    appId: 'app_I0olLtH4wQW5O3bvdqYiNfXuyeMqAj2aPU66cRJUabc',
    dev_id: 'dev_jRzdeL6PPFo1wC1VjAhesWHwBUGFpH3g87hasG7m5Pw',
    prod_id: 'prod_76cCrZOrKsDy6JnntncTnArAf0jdxkL3EQ0tBmYlMDc'
  },
  entitlementsFileIOS: './signing/store/prod.entitlements'
};
