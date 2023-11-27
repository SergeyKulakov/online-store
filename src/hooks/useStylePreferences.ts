import { useEffect, useState } from 'react';
import { PreferenceKey, StylePreferences } from '@assos/types/stylePreferences';
import { AsyncStorageKeys, getStorageValue } from '@assos/lib';
import { noop } from 'lodash-es';

const initialStylePreferences: StylePreferences = {
  mens: false,
  womens: false,
  road: false,
  mountain: false,
  gravel: false,
  racing: false,
  comfort: false
};

export const useStylePreferences = () => {
  const [stylePreferences, setStylePreferences] =
    useState<StylePreferences>(initialStylePreferences);

  useEffect(() => {
    const getStylePreferences = async () => {
      const stylePreferencesJSON = await getStorageValue(AsyncStorageKeys.StylePreferences);
      if (stylePreferencesJSON) {
        setStylePreferences(JSON.parse(stylePreferencesJSON));
      }
    };
    getStylePreferences().catch(noop);
  }, []);

  const setPreferenceValue = (key: PreferenceKey, val: boolean) => {
    setStylePreferences({ ...stylePreferences, [key]: val });
  };

  return {
    stylePreferences,
    setPreferenceValue
  };
};
