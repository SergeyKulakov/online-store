import React, { FC } from 'react';
import { Platform, Text, View } from 'react-native';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import i18n, { keys } from '@assos/lib/translations';
import styles from './SignInOptions.styles';
import useSignIn from '../hooks/useSignIn';

interface SignInOptionsProps {
  closeModal: () => Promise<void>;
}

export const SignInOptions: FC<SignInOptionsProps> = props => {

  const {onAppleButtonPress, onGoogleButtonPress, onFacebookButtonPress, loading} =
  useSignIn(props.closeModal);

  return (
    <View style={styles.singInOptionsWrapper}>
      <View style={styles.altBtnWrapper}>
        {Platform.OS === 'ios' &&
          (
            <AppleButton
              buttonStyle={AppleButton.Style.WHITE}
              buttonType={AppleButton.Type.CONTINUE}
              style={styles.appleSignIn}
              onPress={onAppleButtonPress}
            />
          )
        }
        <View style={styles.verticalAlignment}>
          <CTAButton
            type={CTAButtonTypes.facebook}
            handleOnPress={onFacebookButtonPress}
            loading={loading === 'FACEBOOK'}
          />
          <CTAButton
            style={styles.verticalAlignment}
            type={CTAButtonTypes.google}
            text={i18n.string(keys.signInSection.googleBtnAlt)}
            handleOnPress={onGoogleButtonPress}
            loading={loading === 'GOOGLE'}
          />
        </View>
      </View>
      <View style={styles.separator}>
        <View style={styles.divideLine}/>
        <Text>{i18n.string(keys.signInSection.or)}</Text>
        <View style={styles.divideLine}/>
      </View>
    </View>
  );
};
