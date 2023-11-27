import { Navigator } from '@brandingbrand/fsapp';
import { Platform } from 'react-native';
import { Label } from '@assos/lib/commonTypes';

export const expDateTextReplace = (text: string) => {
  if (text.length === 2) {
    return text.replace(text, text + '/');
  }
  if (text.length === 3) {
    return text.replace('/', '');
  }
  return text;
};

export const noRender = () => null;

export const closeModal = (navigator: Navigator) => {
  navigator
    .dismissModal({
      modal: {
        swipeToDismiss: true
      }
    })
    .catch(e => {
      console.error(e);
    });
};

export const logError = (error: any) => console.log(error);


export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isWeb = Platform.OS === 'web';

export const map = <Value, Result>(
  cb: (value: Value, idx?: number) => Result,
  arr: Value[] | undefined = []
): Result[] => arr.map(cb) || [];

export const head = <T>(value?: T[]) => value?.[0];

export const getLabel = (props: Label) =>
  (props as any).text || (props as any).children || (props as any).title || '';

export const isString = (value: any): value is string => typeof value === 'string';

export const isNumber = (value?: unknown): value is number => typeof value === 'number';

export const isNull = (value: unknown): value is null => value === null;

export const isEmpty = <T extends object>(value: T) => !Object.keys(value).length;

export const get = <Result>(value: unknown, key: string, defaultValue?: any): Result => {
  const result = (value as any)[key];

  return result || defaultValue;
};

export const isZero = (value?: number) => Number(value) === 0;

export const roundTo = (value: number, decimals: number) =>
  Number(Math.round(Number(value.toString() + 'e' + decimals)) + 'e-' + decimals);

export const toLower = (value: string) => value.toLowerCase();

export const parseDecimal = (num: number) => num.toFixed(2);

export const noop = () => undefined;
