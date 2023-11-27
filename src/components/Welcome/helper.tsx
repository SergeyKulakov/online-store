import { i18n, keys } from '@assos/lib';
import { PreferenceKey } from '@assos/types/stylePreferences';

export enum OnBoardingSteps {
  splash,
  greeting,
  quiz,
  notification,
  location
}
export interface PreferenceCard {
  title: string;
  buttonText: string;
  preferences: {
    title: string;
    value: PreferenceKey;
  }[];
}

export const preferenceCards: PreferenceCard[] = [
  {
    title: i18n.string(keys.onBoarding.youShopMostlyFor),
    buttonText: i18n.string(keys.onBoarding.nextTypeOfRide),
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
    buttonText: i18n.string(keys.onBoarding.nextTypeOfFit),
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
    buttonText: i18n.string(keys.onBoarding.finishQuiz),
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
