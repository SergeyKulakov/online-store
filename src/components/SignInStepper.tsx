import React, { FC, ReactNode, useState } from 'react';

/** components */
import { SignInComponent } from './account/SignIn/SignInComponent';

/** misc */
import i18n, { keys } from '../lib/translations';
import ResetPasswordEnterEmail from './account/ResetPasswordEnterEmail';
import ResetPasswordGetMessage from './account/ResetPasswordGetMessage';
import {useDispatch} from 'react-redux';
import {login} from '@assos/state/user';
import CookieManager from '@react-native-cookies/cookies';
import {createAuthCookie} from '@assos/lib/cookies';


export interface SignInStepperProps {
  renderHeader?: (title: string, backAction?: () => void, close?: () => void) => ReactNode;
  onJoinNowPress?: () => void;
  onLoginSuccess?: () => void;
  closeModal: () => Promise<void>;
  isModal?: boolean;
}

export enum SignInSteps {
  SignIn,
  ResetPasswordEnterEmail,
  ResetPasswordGetMessage
}

const SignInStepper: FC<SignInStepperProps> = props => {
  const [currentStep, setCurrentStep] = useState<SignInSteps>(SignInSteps.SignIn);
  const [userEmail, setUserEmail] = useState<string>('');
  const [isLoginError, setIsLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLoginPress = async (email: string, password: string) => {
    setLoading(true);
    setIsLoginError(false);
    try {
      await login(dispatch, {
        email,
        password
      });
      await CookieManager.clearAll();
      await CookieManager.flush(); // Android only
      await CookieManager.removeSessionCookies(); // Android only
      await createAuthCookie();
      props.onLoginSuccess?.();
    } catch (err) {
      setIsLoginError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinNowPress = () => {
    if (props.onJoinNowPress) {
      props.onJoinNowPress();
    }
  };

  const goBack = (component: SignInSteps) => (): void => {
    setCurrentStep(component);
  };

  const getBackByStep = () => {

    switch (currentStep) {
      case SignInSteps.ResetPasswordGetMessage:
        return goBack(SignInSteps.ResetPasswordEnterEmail);
      case SignInSteps.ResetPasswordEnterEmail:
        return goBack(SignInSteps.SignIn);
      case SignInSteps.SignIn:
      default:
        return undefined;
    }
  };

  const getTitleByStep = (): string => {
    switch (currentStep) {
      case SignInSteps.ResetPasswordGetMessage:
      case SignInSteps.ResetPasswordEnterEmail:
        return i18n.string(keys.resetPasswordSection.resetPassword);
      case SignInSteps.SignIn:
      default:
        return i18n.string(keys.signInSection.logIn);
    }
  };

  const handleGoToForgot = (): void => {
    setCurrentStep(SignInSteps.ResetPasswordEnterEmail);
  };

  const goTo = (component: SignInSteps): void => {
    setCurrentStep(component);
  };

  const saveEmail = (email: string): void => {
    setUserEmail(email);
  };

  const clearUserName = (): void => {
    setUserEmail('');
  };


  const getRenderStep = () => {
    switch (currentStep) {
      case SignInSteps.ResetPasswordGetMessage:
        return (
          <ResetPasswordGetMessage
            userEmail={userEmail}
            clearUserName={clearUserName}
            onNextStep={goTo}
          />
        );
      case SignInSteps.ResetPasswordEnterEmail:
        return (
          <ResetPasswordEnterEmail
            userEmail={userEmail}
            onNextStep={goTo}
            onSaveEmail={saveEmail}
          />
        );
      case SignInSteps.SignIn:
      default:
        return (
          <SignInComponent
            isModal={props.isModal}
            login={handleLoginPress}
            onForgotPassword={handleGoToForgot}
            onJoinNowPress={handleJoinNowPress}
            closeModal={props.closeModal}
            loginError={isLoginError}
            loading={loading}
          />
        );
    }
  };

  return (
      <>
        {!!props.renderHeader &&
         props.renderHeader(getTitleByStep(), getBackByStep(), props.closeModal)}
        {getRenderStep()}
      </>
  );

};

export default SignInStepper;
