import {setIsLoggedIn} from '@assos/state/user';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import {
  AsyncStorageKeys, setStorageValue, SignInProviders} from '@assos/lib';
import {magento} from '@assos/datasources';
import {refreshCookies} from '@assos/lib/cookies';

type SignInErrors = {APPLE: string} | {FACEBOOK: string} | {GOOGLE: string};
enum Social {
  APPLE = 'APPLE',
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK'
}


const useSignIn = (closeModal: () => Promise<void>) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<SignInErrors | undefined>();
  const [loading, setLoading] = useState<Social>();


  const postLogin = async () => {
    setError(undefined);
    closeModal().catch();
    await refreshCookies();
    setIsLoggedIn(dispatch, true);
    return setLoading(undefined);
  };

  const onAppleButtonPress = async () => {
    setLoading(Social.APPLE);

    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    });

    const { identityToken, nonce, authorizationCode } = appleAuthRequestResponse;
    const payload = {
      social_response: {
        authorization: {
          code: authorizationCode,
          id_token: identityToken
        }
      },
      social_type: 'apple'
    };

    if (appleAuthRequestResponse.realUserStatus) {
      await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.APPLE);
      await magento.socialLogin(payload);
      return postLogin();
    }
    if (!appleAuthRequestResponse.identityToken) {
      setError({APPLE: 'Something went wrong signin in with Apple.'});
    }

    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    await magento.socialLogin(payload);
    await auth().signInWithCredential(appleCredential);
    await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.APPLE);
    await postLogin();
  };


  const onGoogleButtonPress = async () => {
    setLoading(Social.GOOGLE);
    const currentUser = await GoogleSignin.getCurrentUser();
    if (currentUser) {
      await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.GOOGLE);
      await postLogin();
    }

    try {
      const userInfo = await GoogleSignin.signIn();
      const {accessToken, idToken} = await GoogleSignin.getTokens();
      if (accessToken && idToken) {
        const payload = {
          social_response: {
            tokenObj: {
              token_type: 'Bearer',
              access_token: accessToken,
              id_token: idToken,
              idpId: 'google'
            }
          },
          social_type: 'google'
        };
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        await magento.socialLogin(payload);
        await auth().signInWithCredential(googleCredential);

        await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.GOOGLE);
        await postLogin();
      }
    } catch (error) {
      console.error('Something went wrong signing in user', error);
      setError({GOOGLE: 'Something went wrong signin in with Google.'});
      return setLoading(undefined);
    }
  };


  const onFacebookButtonPress = async () => {
    setLoading(Social.FACEBOOK);
    const currentUser = await AccessToken.getCurrentAccessToken();

    if (currentUser) {
      await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.FACEBOOK);
      await postLogin();
    }

    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      const token = await AccessToken.getCurrentAccessToken();
      const userInfo = await Profile.getCurrentProfile();

      if (result.isCancelled) {
        return setLoading(undefined);
      }

      if (!!token) {
        const facebookCredential = auth.FacebookAuthProvider.credential(token.accessToken);
        const payload = {
          social_response: {
            first_name: userInfo?.firstName,
            last_name: userInfo?.lastName,
            email: userInfo?.email,
            id: userInfo?.userID,
            accessToken: facebookCredential.token,
            userID: userInfo?.userID,
            graphDomain: 'facebook'
          },
          social_type: 'facebook'
        };
        await magento.socialLogin(payload);
        await auth().signInWithCredential(facebookCredential);
        await setStorageValue(AsyncStorageKeys.loginMethod, SignInProviders.FACEBOOK);
        await postLogin();
      }
    } catch (error) {
      console.error('Something went wrong signing in user', error);
      setError({FACEBOOK: 'Something went wrong signin in with Facebook.'});
      return setLoading(undefined);
    }
  };


  return {
    onAppleButtonPress,
    onGoogleButtonPress,
    onFacebookButtonPress,
    error, // Will be used later to render a descriptive message to the user.
    loading // To ensure we don't render an error before loading is done.
  };
};

export default useSignIn;
