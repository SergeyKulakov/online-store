import { PredictiveMeasurementsOptions } from './eyefitu.types';

export const convertCmToIn = (cm: number): number => cm / 2.54;

export const convertInToCm = (inches: number) => inches * 2.54;

export const getFeetFromInches = (inches: number) => Math.floor(inches / 12);

export const getRemainingInches = (inches: number) => inches % 12;

export const convertPoundsToKg = (lbs: number) => lbs * 0.453592;

export const convertToMetric = (
  options: PredictiveMeasurementsOptions
): PredictiveMeasurementsOptions => {
  return {
    ...options,
    height: convertInToCm(options.height),
    weight: convertPoundsToKg(options.weight)
  };
};
