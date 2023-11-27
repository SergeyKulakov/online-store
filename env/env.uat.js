const common = require('./common');

module.exports = {
  ...common,
  magento: {
    ...common.magento,
    webBaseURL: 'https://www.assos-storefront.com.stage.filoblutest.com',
    baseURL: 'https://api.assos.com.stage.filoblutest.com/honey',
    cookiesURL: 'www.assos-storefront.com.stage.filoblutest.com',
    mediaBaseURL: 'https://www.assos-storefront.com.stage.filoblutest.com/media'
  },
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
  firebase: {
    android: {
      googleServicesJsonFile: 'assets/config/firebase/uat/google-services.json'
    },
    ios: {
      googleServicesPlistFile: 'assets/config/firebase/uat/GoogleService-Info.plist'
    },
    ...common.firebase
  }
};
