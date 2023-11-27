import { getToken, isGuest } from '@assos/lib';


export enum SignInProviders {
  NATIVE = 'NATIVE',
  GOOGLE = 'GOOGLE',
  APPLE = 'APPLE',
  FACEBOOK = 'FACEBOOK'
}


export const determineUserSignInStatus = async () => {
  const token = await getToken();

  return !isGuest(token);
};
