const common = require('./common');

module.exports = {
  ...common,
  engagement: {
    baseURL: 'http://localhost:8888/v1',
    cacheTTL: 0,
    appId: 0,
    apiKey: 'ciqelxxfnlbhkccbhycbkzqkyfqmxcif'
  },
  firebase: {
    google: {
      webClientId: '228156264915-9m6nooic90ea1gr8sv5n0399vhmcg3lb.apps.googleusercontent.com'
    },
    android: {
      googleServicesJsonFile: 'assets/config/uat/google-services.json'
    },
    ios: {
      googleServicesPlistFile: 'assets/config/uat/GoogleService-Info.plist'
    }
  }
};
