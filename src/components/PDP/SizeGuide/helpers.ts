export const ageRanges = [
  { text: '16', value: 16 },
  { text: '17', value: 17 },
  { text: '18-25', value: 18 },
  { text: '26-35', value: 26 },
  { text: '36-45', value: 36 },
  { text: '46-55', value: 46 },
  { text: '56-65', value: 56 },
  { text: '66-75', value: 66 },
  { text: '75+', value: 75 }
];

export const getAgeFromRange = (age: number) => {
  // tslint:disable curly
  if (age <= 16) return 16;
  if (age <= 17) return 17;
  if (age <= 25) return 18;
  if (age <= 35) return 26;
  if (age <= 45) return 36;
  if (age <= 55) return 46;
  if (age <= 65) return 56;
  if (age <= 75) return 66;
  if (age >= 75) return 75;
  return 36;
};

export const dynamicSizeGuideCategoryValues = [
  'BIB SHORTS',
  'KNICKERS AND TIGHTS',
  'JERSEY',
  'JACKETS',
  'WIND-RAIN SHELLS',
  'CHRONOSUITS',
  'BODY INSULATOR'
];

export const checkForStaticCategoryLevel2Value = (value: string) => {
  if (dynamicSizeGuideCategoryValues.includes(value)) {
    return false;
  } else {
    return true;
  }
};

export const measurementTools = {
  convertInToCm: (inches: number) => Math.round(inches * 2.54),
  convertCmToIn: (centimeters: number) => Math.round(centimeters / 2.54),
  convertToMetricHeight: ({
    feet,
    inches
  }: {
    feet: number;
    inches: number;
  }) => {
    const totalInches = Math.round(feet * 12 + inches);
    return Math.round(totalInches * 2.54);
  },
  convertKgToLbs: (kilograms: number) => Math.round(kilograms * 2.2),
  convertLbsToKg: (pounds: number) => Math.round(pounds / 2.2)
};

export const cleanSizeLabel = (size: string): string => size.split(' ')[0];
