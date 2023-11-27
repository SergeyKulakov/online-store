import SInfo, { RNSensitiveInfoOptions } from 'react-native-sensitive-info';
import { noop } from 'lodash-es';

export const options: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'Ecommerce-Prefs',
  keychainService: 'Ecommerce-Service'
};

const TOKEN_ECOMMERCE = 'token-ecommerce';
const EMAIL_ECCOMMERCE = 'email-ecommerce';
const PASSWORD_ECCOMMERCE = 'password-ecommerce';
const SID_COMMERCE = 'sid-ecommerce';


export const setToken = async (token: string): Promise<void> => {
  const tokenStringify = JSON.stringify(token);
  await SInfo.setItem(TOKEN_ECOMMERCE, tokenStringify, options).catch(noop);
};

export const getToken = async (): Promise<string | undefined> => {
  try {
    const token: string = await SInfo.getItem(TOKEN_ECOMMERCE, options);
    return JSON.parse(token);
  } catch (err) {
    return undefined;
  }
};

export const removeToken = async (): Promise<void> => {
  await SInfo.deleteItem(TOKEN_ECOMMERCE, options).catch(noop);
};

export const setSID = async (token: string): Promise<void> => {
  const tokenStringify = JSON.stringify(token);
  await SInfo.setItem(SID_COMMERCE, tokenStringify, options).catch(noop);
};

export const getSID = async (): Promise<string | undefined> => {
  try {
    const token: string = await SInfo.getItem(SID_COMMERCE, options);
    return JSON.parse(token);
  } catch (err) {
    return undefined;
  }
};

export const removeSID = async (): Promise<void> => {
  await SInfo.deleteItem(SID_COMMERCE, options).catch(noop);
};

export const setEmailPassword = async (email: string, password: string): Promise<void> => {
  await SInfo.setItem(EMAIL_ECCOMMERCE, email, options).catch(noop);
  await SInfo.setItem(PASSWORD_ECCOMMERCE, password, options).catch(noop);
};

export const getEmailPassword = async (): Promise<{
  email: string; password: string;
} | undefined> => {
  const email = await SInfo.getItem(EMAIL_ECCOMMERCE, options).catch(noop);
  const password = await SInfo.getItem(PASSWORD_ECCOMMERCE, options).catch(noop);
  if (email && password) {
    return { email, password };
  }
  return undefined;
};

export const removeEmailPassword = async (): Promise<void> => {
  await SInfo.deleteItem(EMAIL_ECCOMMERCE, options).catch(noop);
  await SInfo.deleteItem(PASSWORD_ECCOMMERCE, options).catch(noop);
};
