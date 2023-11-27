module.exports = {
  appIconDir: {
    android: 'assets/appIcon/android',
    ios: 'assets/appIcon/ios'
  },
  disableDevFeature: false,
  name: 'assos',
  displayName: 'Assos',
  bundleIds: {
    android: 'com.brandingbrand.assos',
    ios: 'com.brandingbrand.assos'
  },
  launchScreen: {
    android: 'assets/launchScreen/android',
    ios: {
      images: 'assets/launchScreen/ios/LaunchImages.xcassets',
      storyboard: 'assets/launchScreen/ios/LaunchScreen.storyboard'
    }
  },
  hiddenEnvs: ['store'],
  buildConfig: {
    ios: {
      exportTeamId: '762H5V79XV',
      appleCert: './signing/AppleWWDRCA.cer',
      profilesDir: './signing/enterprise',
      distCert: './signing/enterprise/enterprise.cer',
      distP12: './signing/enterprise/enterprise.p12',
      provisioningProfileName: 'Assos In House Provisioning Profile'
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
          'Assos Notification In House Provisioning Profile',
        bundleExtensionId: 'com.brandingbrand.assos.notification',
        extensionPath: 'NotificationService',
        displayName: 'AssosAppNotifications',
        plistName: 'NotificationService-Info.plist',
        additionalFiles: [
          {
            newText: 'com.brandingbrand.assos.notification',
            oldText: '__BUNDLE_IDENTIFIER__',
            paths: ['NotificationService/NotificationService-Info.plist']
          },
          {
            newText: '',
            oldText: /PRODUCT_BUNDLE_IDENTIFIER = ".*$/gm,
            paths: ['assos.xcodeproj/project.pbxproj']
          },
          {
            oldText: `DEVELOPMENT_TEAM='762H5V79XV' PROVISIONING_PROFILE_SPECIFIER='Assos In House Provisioning Profile'`,
            newText: `DEVELOPMENT_TEAM='762H5V79XV' MAIN_PROFILE='Assos In House Provisioning Profile' EXT_PROFILE='Assos Notification In House Provisioning Profile'`,
            paths: ['fastlane/Fastfile']
          },
          {
            oldText: /PRODUCT_NAME = assos;/g,
            newText: `PRODUCT_NAME = assos;
            MAIN_PROFILE = "Assos In House Provisioning Profile";
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
  desktopHost: 'https://www.brandingbrand.com',
  entitlementsFileIOS: './signing/enterprise/enterprise.entitlements',
  cmsEnvironment: 4,
  cmsPropertyId: 549,
  cmsToken:
    'eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdXQiOiJjb20uYnJhbmRpbmdicmFuZC5lbmdhZ2VtZW50IiwiZXhwIjoxNjQ1MDI3NTQ4LCJuYmYiOjE2MTM0OTE1NDgsInJvbGUiOiJTdGFmZiIsImZlYXR1cmVzIjpbXSwicm9sZXMiOlsiVXNlcnMiLCJTdGFmZiIsIkFkbWluIl0sInNjb3BlIjp7fSwiaWF0IjoxNjEzNDkxNTQ4LCJpc3MiOiJjb20uYnJhbmRpbmdicmFuZC5hdXRoIiwic3ViIjoiMjkifQ.AbWGOQ9OqUjaOINXYSL6aV6XbXauNe4JVnm-6ZKr7ZJZgyFChSqGpncU2DbV0E3h4H0YPdHTLHg4VOEUgL_kZD_AAPtb349g_FJLzcJTP_4DQ6vezE0SZrLy5oiBvR50S0dfIF7ttSX4-ribHy3HJKn-VG0rQgBCh2ITyYy55-T0ezLI',
  apiHost: 'https://api.example.com',
  require: [],
  engagement: {
    baseURL: 'https://api.uat.bbhosted.com/flagship/v1',
    cacheTTL: 0,
    appId: '0',
    apiKey: 'ciqelxxfnlbhkccbhycbkzqkyfqmxcif'
  },
  engagementLegacy: {
    path: '/engagement-general/v1',
    cacheTTL: 0,
    apiKey: 'ciqelxxfnlbhkccbhycbkzqkyfqmxcif'
  },
  appCenter: {
    organization: 'Branding-Brand',
    distribute: {
      appNameIOS: 'Assos-iOS-Internal',
      appNameAndroid: 'Assos-Android-Internal'
    }
  },
  sentryDSN: '',
  dataSource: {
    type: 'commercetools',
    categoryFormat: 'list',
    enableProxy: true
  },
  usageDescriptionIOS: [
    {
      key: 'UIUserInterfaceStyle',
      string: 'Light'
    },
    {
      key: 'NSLocationAlwasysAndWhenInUseUsageDescription',
      string: 'Your current location will be used for the weather recommendations'
    },
    {
      key: 'NSLocationAlwasysUsageDescription',
      string: 'Your current location will be used for the weather recommendations'
    },
    {
      key: 'NSLocationWhenInUseUsageDescription',
      string: 'Your current location will be used for the weather recommendations'
    }
  ],
  permissions: {
    ios: {
      NOTIFICATIONS: '',
      LOCATION_WHEN_IN_USE: 'Your current location will be used for the weather recommendations'
    },
    android: [
      'ACCESS_FINE_LOCATION'
    ]
  },
  leanplum: {
    appId: 'app_utKdd3Cjx51foH0o5eHh2FMdLB81eId4iyU3ZDo2jzM',
    dev_id: 'dev_N0Fmsq80y4tFgOHrrdhh962A6sEJVdwr4gk636TwyXQ',
    prod_id: 'prod_B1y5CegCYc8wRcTHSCcfEkYhnPbFty3g5l7i07KN8Fs'
  },
  firebase: {
    android: {
      googleServicesJsonFile: 'assets/config/firebase/uat/google-services.json'
    },
    google: {
      webClientId: '228156264915-9m6nooic90ea1gr8sv5n0399vhmcg3lb.apps.googleusercontent.com',
      webClientSecret: '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',
      reservedClientId: 'com.googleusercontent.apps.228156264915-t1kbapb5njsaejmoq60adri3b3cecrmr',
      iosClientId: '228156264915-t1kbapb5njsaejmoq60adri3b3cecrmr.apps.googleusercontent.com',
      scopes: [
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
        'openid'
      ]
    }
  },
  facebook: {
    appID: '5224196367692957',
    clientToken: '1ef8106272243bc9c104585d6082c8d3',
  },
  magento: {
    consumerKey: '9uyp5sro3rts2vybqazho4buvdz35xk5',
    consumerSecret: '2l5q4bb71gm3eizjjn9e6ydlq02exmz3',
  },
  eyefitu: {
    apiKey: '4735f316-36f8-44b1-8abb-c1f6f570ae49',
    baseURL: 'https://sdk-api.eyefitu.com',
    store: 'assos.com'
  }
};
