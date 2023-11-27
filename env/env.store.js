const prodEnv = require('./env.prod');

module.exports = {
  ...prodEnv,
  envName: 'store',
  bundleIds: {
    android: 'com.assos.www',
    ios: 'com.assos.www'
  },
  disableDevFeature: true,
  sentryDSN:
    'https://d3dcc25657ec422899717b09af1bed60@o124661.ingest.sentry.io/6476874',
  buildConfig: {
    ios: {
      exportTeamId: '76C7RM43R4',
      appleCert: './signing/store',
      profilesDir: './signing/store',
      distCert: './signing/store/AssosStoreDistCertificates.cer',
      distP12: './signing/store/AssosStoreDistCertificates.p12',
      provisioningProfileName: 'Assos Mobile App Profile',
      exportMethod: 'app-store'
    },
    android: {
      storeFile: './signing/assos.keystore',
      keyAlias: 'key0'
    }
  },
  // TODO: store version code
  android: {
    build: {
      versionCode: '1'
    }
  },
  ios: {
    buildVersion: '1'
  },

  leanplum: {
    appId: 'app_I0olLtH4wQW5O3bvdqYiNfXuyeMqAj2aPU66cRJUabc',
    dev_id: 'dev_jRzdeL6PPFo1wC1VjAhesWHwBUGFpH3g87hasG7m5Pw',
    prod_id: 'prod_76cCrZOrKsDy6JnntncTnArAf0jdxkL3EQ0tBmYlMDc'
  },
  entitlementsFileIOS: './signing/store/prod.entitlements',
  firebase: {
    google: {
      webClientId:
        '228156264915-9m6nooic90ea1gr8sv5n0399vhmcg3lb.apps.googleusercontent.com',
      scopes: [
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
        'openid'
      ]
    },
    android: {
      googleServicesJsonFile:
        'assets/config/firebase/production/google-services.json'
    },
    ios: {
      googleServicesPlistFile:
        'assets/config/firebase/production/GoogleService-Info.plist'
    }
  }
};
