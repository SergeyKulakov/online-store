import { FSNetwork, FSNetworkRequestConfig } from '@brandingbrand/fsnetwork';

export class BaseController extends FSNetwork {
  instance: any;
  interceptor?: any;
  headers?: any;

  constructor(config: FSNetworkRequestConfig) {
    super(config);

    this.headers = config.headers;
  }

  magentoHeaders = async (): Promise<FSNetworkRequestConfig['headers']> => {
    throw Error('Error: implement magentoHeaders');
  }
}
