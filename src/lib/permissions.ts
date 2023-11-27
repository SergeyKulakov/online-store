import Permissions, { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';


export const requestNotificationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    return true;
  }
  try {
    const checkResult = await Permissions.checkNotifications();
    if (checkResult.status === RESULTS.GRANTED) {
      return true;
    } else {
      const requestResult = (await Permissions.requestNotifications(['alert', 'badge', 'sound']));
      return requestResult.status === RESULTS.GRANTED;
    }
  } catch (error) {
    return false;
  }
};

const checkStatus = (status: 'unavailable' | 'blocked' | 'granted' | 'denied'): boolean => {
  switch (status) {
    case 'granted': {
      return true;
    }
    case 'unavailable':
    case 'blocked':
    case 'denied':
    default: {
      return false;
    }
  }
};

const locationPermission = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
});

export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    if (!!locationPermission) {
      const status = await check(locationPermission);
      if (status === 'denied') {
        return checkStatus(await request(locationPermission));
      }

      return checkStatus(status);
    }
    return false;
  } catch (e) {
    return false;
  }
};

