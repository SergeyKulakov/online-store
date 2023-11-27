import { refreshCookies } from './../../lib/cookies';
import { deleteStorageValue, setStorageValue } from './../../lib/asyncStorage';
import { SignInProviders } from './../../lib/determineUserSignInStatus';
import { getSID, removeSID, removeToken } from './../../lib/sensitiveInfo';
import { Action, Dispatch } from 'redux';
import { magento } from '@assos/datasources';
import { asyncAction } from '@assos/state/helpers';
import { userActions } from '@assos/state/user/types';
import { RegisterFormValues } from '@assos/components/forms/RegisterForm/formConfig';
import { UserType } from '@assos/datasources/magento/User';
import { zapier } from '@assos/datasources/zapier';
import { fetchUserData } from '@assos/lib/fetchUserData';
import {
  AsyncStorageKeys } from '@assos/lib';
import appleAuth from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';


export const setIsLoggedIn = (dispatch: Dispatch<Action>, isLoggedIn: boolean) => {
  dispatch({type: userActions.setIsLoggedIn.done, value: isLoggedIn});
};


export const login = async (
  dispatch: Dispatch<Action>,
  loginData: UserType.Login.Request
) => {
  dispatch({type: userActions.register.start});
  try {
    await magento.login({...loginData});
    await refreshCookies();
    dispatch({type: userActions.setIsLoggedIn.done, value: true});
    await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.NATIVE);
    await fetchUserData(dispatch);
  } catch (error) {
    console.error('logging in error', error);
    dispatch({type: userActions.register.fail, error});
    throw error;
  }
};

export const registerUser = async (
  dispatch: Dispatch<Action>,
  newUserData: RegisterFormValues
) => {
  dispatch({type: userActions.register.start});
  try {
    const data = await magento.register({
      ...newUserData,
      is_subscribed: false,
      additional_info: {}
    });
    dispatch({type: userActions.register.done, data});
    const loginRequest = {email: newUserData.email, password: newUserData.password};
    await login(dispatch, loginRequest);
  } catch (error) {
    dispatch({type: userActions.register.fail, error});
  }
};

export const logout = async (
  dispatch: Dispatch<Action>
) => {
  dispatch({type: userActions.setIsLoggedIn.start});

  try {
    const SID = await getSID();
    if (SID) {
      // We will try V1 if V2 fails.
      await magento.deleteSessionV2(SID).catch(async () => magento.logout().catch());
    }
    await GoogleSignin.signOut().catch(); // Google
    await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGOUT
    }).catch(); // Apple
    LoginManager.logOut(); // FB
    dispatch({type: userActions.setIsLoggedIn.done});
  } catch (error) {
    dispatch({type: userActions.setIsLoggedIn.fail});
  } finally {
    await deleteStorageValue(AsyncStorageKeys.loginMethod);
    await removeToken();
    await removeSID();
    await refreshCookies();
    setIsLoggedIn(dispatch, false);
    dispatch({type: userActions.setIsLoggedIn.done});
  }
};

export const deleteUser = async (
  dispatch: Dispatch<Action>,
  deleteUserData: UserType.Delete.Request
) => {
  zapier.deleteAccount(deleteUserData.email, deleteUserData.store);
};

export const fetchCustomerInfo = async (dispatch: Dispatch<Action>) => {
  const fetchCustomerInfoPromise = magento.getCustomerData();
  asyncAction(fetchCustomerInfoPromise, userActions.fetchCustomerInfo, dispatch);
  await fetchCustomerInfoPromise;
};
