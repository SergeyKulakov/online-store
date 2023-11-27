import { Leanplum } from '@leanplum/react-native-sdk';
import { env } from '@brandingbrand/fsapp';
import { logError } from '@assos/helpers';
import { getVersion } from 'react-native-device-info';

const { appId, prod_id, dev_id } = env.leanplum;

export const startLeanplum = async () => {
  if (__DEV__) {
    Leanplum.setAppIdForDevelopmentMode(appId, dev_id);
  } else {
    Leanplum.setAppIdForProductionMode(appId, prod_id);
  }

  try {
    if (!(await Leanplum.hasStarted())) {
      Leanplum.start();

      await Leanplum.hasStarted().then(result => {
        if (result) {
          Leanplum.setUserAttributes({
            appVersion: getVersion()
          });
        }
      });
    }
  } catch (error) {
    logError(error);
  }
};
