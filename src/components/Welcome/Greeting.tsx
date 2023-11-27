import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { i18n, keys } from '@assos/lib';
import CTAButton, {CTAButtonTypes} from '@assos/components/ui/CTAButton';

interface GreetingProps {
  navigateToNextStep: () => void;
}

export const Greeting = ({navigateToNextStep}: GreetingProps) => {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.flexEnd}>
        <Text style={[styles.cardTitle, styles.lightText, styles.greeting]}>
          {i18n.string(keys.onBoarding.greeting)}
        </Text>
      </View>
      <View style={styles.greetingCtaContainer}>
        <CTAButton
          style={[
            styles.nextBtn, styles.marginBottom90]
          }
          styleText={[styles.skipBtnText, styles.nextBtnText]}
          type={CTAButtonTypes.secondary}
          text={i18n.string(keys.onBoarding.start)}
          handleOnPress={navigateToNextStep}
        />
      </View>
    </View>
  );
};
