import React from 'react';
import { KeyboardAvoidingViewProps } from 'react-native';

/** components */
import ModalWrapper from '@assos/components/ui/ModalWrapper';

/** misc */
import { makeModal } from '@brandingbrand/fsapp';
import SignInStepper from '@assos/components/SignInStepper';
import { ModalHeader } from '@assos/components/ModalHeader';

export interface SignInModalResponse {
  joinNowIsPressed?: boolean;
}

const keyboardAvoidingProp: KeyboardAvoidingViewProps = {
  behavior: 'position'
};

export const SignIn = makeModal<
  SignInModalResponse,
  { closeModals: () => Promise<void> }
>(({ resolve, reject, closeModals }) => {
  const onJoinNowPress = () => {
    resolve({ joinNowIsPressed: true });
  };

  const onLoginSuccess = () => {
    resolve({ joinNowIsPressed: false });
  };

  return (
    <ModalWrapper
      resolve={onJoinNowPress}
      reject={reject}
      keyboardAvoidingProp={keyboardAvoidingProp}
    >
      <SignInStepper
        closeModal={closeModals}
        renderHeader={renderHeader}
        onJoinNowPress={onJoinNowPress}
        onLoginSuccess={onLoginSuccess}
      />
    </ModalWrapper>
  );
});

function renderHeader(
  title: string,
  backAction?: () => void,
  close?: () => void
): JSX.Element {
  return <ModalHeader title={title} backAction={backAction} close={close} />;
}
