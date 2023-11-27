import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Greeting } from './Greeting';
import { NotificationPermit } from './NotificationPermit';
import { OnBoardingSteps } from './helper';
import PreferenceQuiz from './PreferenceQuiz';
import { assetsImages, gifs } from '@assos/styles';
import { styles } from './styles';
import { AsyncStorageKeys, getStorageValue } from '@assos/lib';
import { Leanplum } from '@leanplum/react-native-sdk';
import { logError } from '@assos/helpers';

const AUTO_STEP_DELAY = 2250;

export const Welcome = () => {
  const [currentStep, setCurrentStep] = useState(OnBoardingSteps.splash);
  const getStylePreferences = async () => {
    const stylePreferencesJSON = await getStorageValue(AsyncStorageKeys.StylePreferences);
    return JSON.parse(stylePreferencesJSON ?? '');
  };

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setCurrentStep(OnBoardingSteps.greeting);
      }, AUTO_STEP_DELAY);
    })();
    return () => {
      clearTimeout();
      getStylePreferences()
        .then(stylePreferences => {
          Leanplum.setUserAttributes({ ...stylePreferences });
        }).catch(logError);
    };
  }, []);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={gifs.onboarding}
        style={styles.containerBackground}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Image style={styles.alignCenter} source={assetsImages.assetsLogo} />
          {currentStep === OnBoardingSteps.greeting && (
            <Greeting navigateToNextStep={handleNextStep} />
          )}
          {currentStep === OnBoardingSteps.quiz && (
            <PreferenceQuiz navigateToNextStep={handleNextStep} />
          )}
          {currentStep === OnBoardingSteps.notification && (
            <NotificationPermit />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};
