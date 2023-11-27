export enum Gender {
    male = 'male',
    female = 'female'
}

export enum BodyPlace {
  FULL = 'FULL',
  TOPS = 'TOPS',
  BOTTOMS = 'BOTTOMS',
  FOOTWEAR = 'FOOTWEAR',
  HEAD = 'HEAD',
  PALM = 'PALM'
}

export interface PredictiveMeasurementsOptions {
  gender: string;
  height: number;
  weight: number;
  age: number;
}

export interface MeasurementsResponse {
  HIP_CIRCUMFERENCE: number;
  BUST_CIRCUMFERENCE: number;
  NECK_CIRCUMFERENCE: number;
  THIGH_CIRCUMFERENCE: number;
  UNDER_BUST_CIRCUMFERENCE: number;
  WAIST_CIRCUMFERENCE: number;
  WRIST_CIRCUMFERENCE: number;
  FOOT_LENGTH: number;
  FOOT_BREADTH: number;
  ARM_LENGTH: number;
  ARM_C7_LENGTH: number;
  HEAD_CIRCUMFERENCE: number;
  INSEAM_LENGTH: number;
  UPPER_ARM_CIRCUMFERENCE: number;
  CALF_CIRCUMFERENCE: number;
  MINIMUM_LEG_CIRCUMFERENCE: number;
}

export interface StoredMeasurements extends PredictiveMeasurementsOptions {
  userId: string;
  detailedMeasurements: MeasurementsResponse;
}

export interface EyefituMetadata {
  brandName: string;
  productName: string;
  gender: Gender;
}

export interface PredictiveSizeResponse {
  recommendedSize: string | null;
  bodyPlace: BodyPlace;
  extended: Extended[];
  visualization: Visualization;
}

export interface Extended {
  label: string;
}

export interface Visualization {
  sizes: Size[];
}

export interface Size {
  measurements: Measurement[];
}

export interface Measurement {
  measurement: string;
  match: string;
}
