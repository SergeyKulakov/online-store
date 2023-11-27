import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PreferenceCard from '@assos/components/StylePreferences/PreferenceCard';
import { preferenceCards } from '@assos/components/StylePreferences/helpers';
import { PreferencesCard } from './helpers';
import { AsyncStorageKeys, setStorageValue } from '@assos/lib';
import { useStylePreferences } from '@assos/hooks/useStylePreferences';
import { PreferenceKey } from '@assos/types/stylePreferences';
import { Leanplum } from '@leanplum/react-native-sdk';

const StylePreferencesComponent: FC = () => {
  const {stylePreferences, setPreferenceValue} = useStylePreferences();

  useEffect(() => {
    return () => {
      setStorageValue(AsyncStorageKeys.StylePreferences, stylePreferences).catch();
      Leanplum.setUserAttributes({ ...stylePreferences });
    };
  }, [stylePreferences]);

  function renderCard(card: PreferencesCard, idx: number): JSX.Element {
    const setOptionValue = (key: PreferenceKey, val: boolean) => {
      setPreferenceValue(key, val);
    };

    return (
      <PreferenceCard
        key={idx}
        idx={idx}
        activeCard={card}
        setOptionValue={setOptionValue}
        // @ts-ignore
        currentPreferences={stylePreferences}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      {preferenceCards.map(renderCard)}
    </View>
  );
};

export default StylePreferencesComponent;
