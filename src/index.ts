import { onLaunchApp } from './lib/onLaunchApp';
import './initialize';

import { noop } from 'lodash-es';
import { LogBox } from 'react-native';
import * as Sentry from '@sentry/react-native';
import { bootstrapCreateApp } from '@brandingbrand/fsbuilder';

import { options as sInfoOptions, preLaunch, startLeanplum } from '@assos/lib';
import { reducers } from '@assos/state';
import { navDefault, topBarHidden } from '@assos/styles';
import { routes } from './routes';
import { logError } from './helpers';
import { Navigation } from 'react-native-navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Settings } from 'react-native-fbsdk-next';
import { env } from '@brandingbrand/fsapp';

GoogleSignin.configure({
  webClientId: env.firebase.google.webClientId,
  scopes: env.firebase.google.scopes,
  forceCodeForRefreshToken: true,
  iosClientId: env.firebase.google.iosClientId
});

Settings.initializeSDK();
Settings.setAppID(env.facebook.appID);
const packageJson = require('../package.json');

LogBox.ignoreAllLogs();

if (!__DEV__ && !!env.sentryDSN) {
  Sentry.init({
    dsn: env.sentryDSN
  });
}

Navigation.setDefaultOptions(navDefault);

bootstrapCreateApp({
  preLaunch,
  sInfoOptions,
  appId: env.engagement.appId,
  version: packageJson.version,
  remote: {
    baseURL: env.engagement.baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  state: {
    reducers
  },
  router: {
    routes,
    externalRoutes: {
      defaultTopBar: topBarHidden
    }
  }
})
  .then(onLaunchApp)
  .catch(noop);

if (!!env) {
  startLeanplum().catch(logError);
}
