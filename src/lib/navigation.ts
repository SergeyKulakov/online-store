import { Navigation } from 'react-native-navigation';

import * as tabs from '../tabs';
import { i18n, keys } from './translations';

export const bottomTabMergeOptions = () => {
  Object.keys(tabs).forEach(it => {
    Navigation.mergeOptions((tabs as any)[it].id, {
      bottomTab: {
        ...(tabs as any)[it],
        // @ts-ignore
        text: i18n.string(keys.screenTitles[it.toLocaleLowerCase()])
      }
    });
  });
};
