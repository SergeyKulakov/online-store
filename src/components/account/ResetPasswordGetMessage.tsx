import React, { FC, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

/** components */
import CTAButton, { CTAButtonTypes } from '../ui/CTAButton';
import { SignInSteps } from '../SignInStepper';

/** misc */
import i18n, { keys } from '../../lib/translations';

/** styles */
import { assetsImages } from '@assos/styles';
import styles from './ResetPasswordGetMessage.styles';

const RESEND_TIME = 3000;

export interface ResetPasswordGetMessageProps {
  userEmail: string;
  clearUserName: () => void;
  onNextStep?: (component: SignInSteps) => void;
}

const ResetPasswordGetMessage: FC<ResetPasswordGetMessageProps> = props => {
  const [showResent, setShowResent] = useState(false);

  const timeoutResend = () => {
    setTimeout(() => {
      setShowResent(false);
    }, RESEND_TIME);
  };

  useEffect(() => {
    if (showResent) {
      return timeoutResend();
    }
  }, [showResent]);

  const onBackToSignIn = () => {
    const { onNextStep, clearUserName } = props;
    if (onNextStep) {
      clearUserName();
      onNextStep(SignInSteps.SignIn);
    }
  };
  const handleSendResetLink = () => {
    // TO-DO send reset link
  };

  const handleResendEmail = () => {
    handleSendResetLink();
    setShowResent(true);
  };

  return (
    <View style={{}}>
      <View style={styles.spaceBottom}>
        <Text style={styles.messageText}>
          {i18n.string(keys.resetPasswordSection.linkWay)}
          <Text style={styles.boldWeight}>{props.userEmail}</Text>
          {i18n.string(keys.resetPasswordSection.follow)}
        </Text>
      </View>
      <View style={styles.spaceBottomMore}>
        <CTAButton
          text={i18n.string(keys.resetPasswordSection.backToSignIn)}
          type={CTAButtonTypes.primary}
          handleOnPress={onBackToSignIn}
          styleText={styles.sendBtn}
        />
      </View>
      {showResent ? (
        <View style={styles.didNotGetContainer}>
          <Image
            source={assetsImages.greenCheckmark}
            style={styles.greenCheckmarkIcon}
          />
          <Text style={styles.emailSendText}>
            {i18n.string(keys.resetPasswordSection.emailSent)}
          </Text>
        </View>
      ) : (
        <Text style={styles.didNotGetText}>
          {i18n.string(keys.resetPasswordSection.didNotGet)}
          <Text style={styles.resendText} onPress={handleResendEmail}>
            {' ' + i18n.string(keys.resetPasswordSection.resendEmail)}
          </Text>
        </Text>
      )}
    </View>
  );
};

export default ResetPasswordGetMessage;
