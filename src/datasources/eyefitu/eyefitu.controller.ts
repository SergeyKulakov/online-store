import FSNetwork, { FSNetworkRequestConfig } from '@brandingbrand/fsnetwork';
import {
  MeasurementsResponse,
  PredictiveMeasurementsOptions,
  PredictiveSizeResponse
} from './eyefitu.types';

export class EyefituController extends FSNetwork {
  constructor(config: FSNetworkRequestConfig) {
    super(config);
  }

  getPredictedMeasurements = async (
    options: PredictiveMeasurementsOptions
  ): Promise<MeasurementsResponse> => {
    const res = await this.post(`/measurements`, {
      predictedMeasures: options
    });
    if (res.status === 200) {
      return res.data.predictedMeasures;
    } else {
      throw Error(res.data.error);
    }
  }

  getSizeRecommendation = async ({
    confirmedMeasurements,
    productNameValue
  }: {
    confirmedMeasurements: {
      gender: string;
      height: number;
      weight: number;
      detailedMeasurements: MeasurementsResponse;
    };
    productNameValue: string;
  }): Promise<PredictiveSizeResponse> => {
    const body = {
      store: 'assos.com',
      productMetadata: {
        brandName: 'ASSOS',
        productName: productNameValue,
        gender: confirmedMeasurements.gender
      },
      sizeLabels: ['all'],
      ...confirmedMeasurements,
      preferences: {}
    };
    const res = await this.post('/size-recommendation', body);
    if (res.status === 200) {
      return res.data;
    } else {
      throw Error(res.data.error);
    }
  }
}
