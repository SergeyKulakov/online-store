import AsyncStorage from '@react-native-community/async-storage';
import { logError } from '@brandingbrand/flagship/src/helpers';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import {
  MeasurementsResponse,
  PredictiveMeasurementsOptions
} from '@assos/datasources/eyefitu/eyefitu.types';
import { noop } from 'lodash-es';

export enum AsyncStorageKeys {
  PreferredStore = 'pstore',
  PickingUpPerson = 'ppperson',
  Onboarded = 'onboarded',
  StylePreferences = 'StylePreferences',
  loginMethod = 'loginMethod',
  recentlyViewed = 'recentlyViewed',
  PromptedForLocation = 'promptedForLocation',
  PredictedMeasurements = 'predictedMeasurements',
  DetailedMeasurements = 'detailedMeasurements',
  Store = 'store'
}

export const setStorageValue = async (key: AsyncStorageKeys, value: any) => {
  let storageValue: string;
  if (typeof value === 'object') {
    storageValue = JSON.stringify(value);
  } else if (typeof value === 'number') {
    storageValue = value.toString();
  } else if (typeof value === 'boolean') {
    storageValue = `${value}`;
  } else if (typeof value === 'string') {
    storageValue = value;
  } else {
    throw new Error('Unsupported value. add normilizer tp asyncstorage.ts');
  }
  try {
    await AsyncStorage.setItem(key, storageValue);
  } catch (e) {
    console.error(e);
  }
};

export const getStorageValue = async (
  key: AsyncStorageKeys
): Promise<string | undefined> => {
  const storageValue = await AsyncStorage.getItem(key);
  if (!storageValue) {
    return;
  }

  return storageValue;
};

export const deleteStorageValue = async (
  key: AsyncStorageKeys
): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const setOnboarded = async (value: 'Y' | 'N'): Promise<void> => {
  try {
    await AsyncStorage.setItem(AsyncStorageKeys.Onboarded, value);
  } catch (e) {
    logError(e as string);
    return;
  }
};

export const getOnboarded = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(AsyncStorageKeys.Onboarded);
    return value === 'Y';
  } catch (e) {
    logError(e as string);
    return false;
  }
};

export const getRecentlyViewedItems = async (): Promise<
  ProductControllersTypes.Product[]
> => {
  try {
    const recentlyViewedItems = await AsyncStorage.getItem(
      AsyncStorageKeys.recentlyViewed
    );
    if (recentlyViewedItems) {
      const parsedItems: ProductControllersTypes.Product[] =
        JSON.parse(recentlyViewedItems);
      return parsedItems;
    } else {
      return [];
    }
  } catch (e) {
    logError(e as string);
    return [];
  }
};

export const setRecentlyViewedItems = async (
  item: ProductControllersTypes.Product
) => {
  try {
    const recentlyViewedItems = await getRecentlyViewedItems();
    const oldItemsList = recentlyViewedItems.filter(
      existing => existing._id !== item._id
    );
    const newItemsList = [item, ...oldItemsList].slice(0, 10);
    await AsyncStorage.setItem(
      AsyncStorageKeys.recentlyViewed,
      JSON.stringify(newItemsList)
    );
    return newItemsList;
  } catch (e) {
    logError(e as string);
    return;
  }
};

export const getStylePreferences = async () => {
  try {
    const stylePreferences = await getStorageValue(
      AsyncStorageKeys.StylePreferences
    );
    if (stylePreferences) {
      return JSON.parse(stylePreferences);
    }
  } catch (err) {
    return {};
  }
};

export const userHasBeenPromptedForLocation = () => {
  setStorageValue(AsyncStorageKeys.PromptedForLocation, 'true').catch();
};

export const setMeasurements = (
  userId: string,
  measurementUserInput: PredictiveMeasurementsOptions,
  measurementResponse: MeasurementsResponse
): void => {
  setStorageValue(AsyncStorageKeys.PredictedMeasurements, {
    userId,
    detailedMeasurements: measurementResponse,
    ...measurementUserInput
  }).catch(noop);
};

export const getStoredMeasurements = async () => {
  const val = await AsyncStorage.getItem(AsyncStorageKeys.DetailedMeasurements);
  if (val === null) {
    return null;
  } else {
    return JSON.parse(val) as {
      gender: string;
      age: number;
      height: number;
      weight: number;
      detailedMeasurements: MeasurementsResponse;
    };
  }
};
