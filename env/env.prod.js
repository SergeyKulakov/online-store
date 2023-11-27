const common = require('./common');

module.exports = {
  ...common,
  sentryDSN: 'https://d3dcc25657ec422899717b09af1bed60@o124661.ingest.sentry.io/6476874',
  engagement: {
    baseURL: 'https://api.brandingbrand.com/flagship/v1',
    cacheTTL: 0,
    appId: '240',
    apiKey: 'ciqelxxfnlbhkccbhycbkzqkyfqmxcif'
  },
  engagementLegacy: {
    baseURL: 'https://api.brandingbrand.com/engagement-general/v1',
    cacheTTL: 0,
    appId: '0ec68a51-a23d-49d8-8767-7fcee3c04add',
    apiKey: 'ciqelxxfnlbhkccbhycbkzqkyfqmxcif'
  },
  magento: {
    ...common.magento,
    baseURL: 'https://beehive.assos.com/honey',
    cookiesURL: 'www.assos.com',
    webBaseURL: 'https://www.assos.com',
    mediaBaseURL: 'https://cdn.assos.com.filoblu.com/media'
  },
  firebase: {
    android: {
      googleServicesJsonFile: 'assets/config/firebase/production/google-services.json'
    },
    ios: {
      googleServicesPlistFile: 'assets/config/firebase/production/GoogleService-Info.plist'
    },
    ...common.firebase
  }
};
