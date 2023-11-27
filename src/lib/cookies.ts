import moment from 'moment';
import { env } from '@brandingbrand/fsapp';
import { getSID, getToken } from './sensitiveInfo';
import CookieManager from '@react-native-cookies/cookies';
import { AsyncStorageKeys, getStorageValue } from './asyncStorage';

const tomorrow = moment().add(1, 'days').toISOString();

export const createAuthCookie = async () => {
  const SID = await getSID();
  const authToken = await getToken();
  const cookiesURL = env.magento.cookiesURL;
  const store = await getStorageValue(AsyncStorageKeys.Store);

  if (SID && authToken) {
    await CookieManager.set(`https://${cookiesURL}`, {
      name: 'SID',
      value: SID,
      path: `/${store}/`,
      domain: cookiesURL,
      expires: tomorrow,
      secure: true
    });
    await CookieManager.set(`https://${cookiesURL}`, {
      name: 'auth',
      value: authToken,
      path: `/${store}/`,
      domain: cookiesURL,
      expires: tomorrow,
      secure: true
    });
  }

  await CookieManager.set(`https://${cookiesURL}`, {
    name: 'popup-newsletter',
    value: 'true',
    path: `/${store}/`,
    domain: cookiesURL
  });

  await CookieManager.set(`https://${cookiesURL}`, {
    name: 'accept-cookies',
    value: 'true',
    path: `/${store}/`,
    domain: cookiesURL
  });

  await CookieManager.set(`https://${cookiesURL}`, {
    name: 'G_AUTHUSER_H',
    value: '0',
    path: `/${store}/cart`,
    domain: `.${cookiesURL}`
  });

  await CookieManager.set(`https://${cookiesURL}`, {
    name: 'qcSxc',
    value: moment().add(1, 'days').valueOf().toString(),
    path: `/${store}/cart`,
    domain: cookiesURL,
    expires: tomorrow
  });

  await CookieManager.set(`https://${cookiesURL}`, {
    name: 'accept-cookies',
    value: 'false',
    path: '/',
    domain: cookiesURL,
    expires: tomorrow
  });
};


export const refreshCookies = async () => {
  await CookieManager.clearAll();
  await CookieManager.flush(); // Android only
  await CookieManager.removeSessionCookies(); // Android only
  await createAuthCookie();
};
