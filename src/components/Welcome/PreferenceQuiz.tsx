import React, { useState } from 'react';
import {Text, View} from 'react-native';
import SelectPreferenceCard from './SelectPreferenceCard';
import {styles} from './styles';
import CTAButton, {CTAButtonTypes} from '@assos/components/ui/CTAButton';
import { AsyncStorageKeys, i18n, keys, setStorageValue } from '@assos/lib';
import {noop} from 'lodash-es';
import { preferenceCards } from './helper';
import { useStylePreferences } from '@assos/hooks/useStylePreferences';


interface PreferenceQuizProps {
  navigateToNextStep: () => void;
}

const indicators = [0, 1, 2];

const PreferenceQuiz = (props: PreferenceQuizProps) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const {stylePreferences: preferences, setPreferenceValue} = useStylePreferences();
  const handleNextStep = () => {
    if (activeCardIndex < 2) {
      setActiveCardIndex(i => i + 1);
    } else {
      setStorageValue(AsyncStorageKeys.StylePreferences, preferences).catch(noop);
      props.navigateToNextStep();
    }
  };
  return (
    <View style={styles.preferenceContainer}>
      <SelectPreferenceCard
        activeCard={preferenceCards[activeCardIndex]}
        setOptionValue={setPreferenceValue}
        currentPreferences={preferences}
      />
      <View style={styles.preferenceCardBody}>
        <View style={styles.preferenceInstructionWrapper}>
          <Text style={styles.preferenceInstructionText}>
            {i18n.string(keys.onBoarding.describe)}
          </Text>
        </View>
        <CTAButton
          styleText={styles.skipBtnText}
          type={CTAButtonTypes.primary}
          text={preferenceCards[activeCardIndex].buttonText}
          handleOnPress={handleNextStep}
        />
      <View style={styles.indicatorRow}>
        {indicators.map(i => (
          <View
            key={i}
            style={i === activeCardIndex ? styles.indicatorActive : styles.indicatorInactive}
          />
        ))}
      </View>
      </View>
    </View>
  );
};

export default PreferenceQuiz;
