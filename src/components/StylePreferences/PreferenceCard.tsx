import React from 'react';
import { Switch, Text, View } from 'react-native';

import { styles } from './styles';
import { lightMode as palette } from '@assos/styles';
import { PreferenceKey, StylePreferences } from '@assos/types/stylePreferences';
import { PreferencesCard } from './helpers';


interface PreferenceCardProps {
  idx: number;
  activeCard: PreferencesCard;
  setOptionValue: (key: PreferenceKey, val: boolean) => void;
  currentPreferences: StylePreferences;
}

const PreferenceCard = (props: PreferenceCardProps) => {
  const count = `0${props.idx + 1}.`;
  const {activeCard} = props;
  if (!activeCard) { return null; }
  const setPreferenceValue = (pref: PreferenceKey) =>
    (val: boolean) => props.setOptionValue(pref, val);
  return (
    <View style={styles.preferenceCardContainer}>
      <View style={styles.preferenceTitleRow}>
        <Text style={styles.cardTitle}> {count} {activeCard.title}:</Text>
      </View>
      {activeCard.preferences.map(pref => (
        <View key={pref.value} style={styles.preferenceSwitchRow}>
          <Switch
            trackColor={{
              true: palette.systemBackgroundTertiary,
              false: palette.buttonSecondaryHover
            }}
            onValueChange={setPreferenceValue(pref.value)}
            value={props.currentPreferences?.[pref.value]}
          />
          <Text style={styles.preferenceSwitchText}>{pref.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default PreferenceCard;
