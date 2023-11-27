import React from 'react';
import CTAButton, { CTAButtonTypes } from '../../ui/CTAButton';
import { Image, ImageBackground, Text, View } from 'react-native';
import { assetsImages, background } from '@assos/styles';
import styles from './LoginAndRegister.styles';
import { i18n, keys } from '@assos/lib';
import { useModals } from '@brandingbrand/fsapp';
import { SignIn, SignInModalResponse } from '@assos/modals/SignIn';
import RegisterModal from '@assos/modals/RegisterModal';


const LoginAndRegister = () => {
  const modals = useModals();

  const handleJoinNowPress = async (): Promise<void> => {
    const closeModals = modals.dismissAllModals.bind(LoginAndRegister);
    await modals.showModal<{}, {closeModals: () => Promise<void>}>(RegisterModal, {
      closeModals
    }).catch();
  };

  const handleLoginPress = async (): Promise<void> => {

    const closeModals = modals.dismissAllModals.bind(LoginAndRegister);
    await modals.showModal<SignInModalResponse, {closeModals: () => Promise<void>}>(SignIn, {
      closeModals
    }).catch();
  };

  return (
    <ImageBackground source={background.guest} style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.logo} source={assetsImages.logoGuest} />
        <Text style={styles.greeting}>{i18n.string(keys.account.guestGreeting)}</Text>
          <>
          <CTAButton
            style={styles.ctaButton}
            type={CTAButtonTypes.secondary}
            text={i18n.string(keys.account.ctaLogin)}
            styleText={styles.ctaBtnText}
            handleOnPress={handleLoginPress}
          />
          <CTAButton
            type={CTAButtonTypes.empty}
            text={i18n.string(keys.account.ctaCreateAccount)}
            handleOnPress={handleJoinNowPress}
            styleText={[styles.ctaBtnText, styles.registerBtnText]}
            style={[styles.ctaButton, styles.ctaCreateAccount]}
          />
          </>
      </View>
    </ImageBackground>
  );
};

export default LoginAndRegister;
