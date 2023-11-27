import { i18n, keys } from '@assos/lib';
import { PreferenceKey } from '@assos/types/stylePreferences';

export interface PreferencesCard {
  title: string;
  preferences: {
    title: string;
    value: PreferenceKey;
  }[];
}

export const preferenceCards: PreferencesCard[] = [
  {
    title: i18n.string(keys.onBoarding.youShopMostlyFor),
    preferences: [
      {
        title: i18n.string(keys.onBoarding.men),
        value: 'mens'
      },
      {
        title: i18n.string(keys.onBoarding.women),
        value: 'womens'
      }
    ]
  },
  {
    title: i18n.string(keys.onBoarding.youMostlyRideOn),
    preferences: [
      {
        title: i18n.string(keys.onBoarding.road),
        value: 'road'
      },
      {
        title: i18n.string(keys.onBoarding.mountain),
        value: 'mountain'
      },
      {
        title: i18n.string(keys.onBoarding.gravel),
        value: 'gravel'
      }
    ]
  },
  {
    title: i18n.string(keys.onBoarding.theTypeOfFit),
    preferences: [
      {
        title: i18n.string(keys.onBoarding.racing),
        value: 'racing'
      },
      {
        title: i18n.string(keys.onBoarding.comfort),
        value: 'comfort'
      }
    ]
  }
];
