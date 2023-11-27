import FSNetwork, {FSNetworkRequestConfig} from '@brandingbrand/fsnetwork';

export const zapierController = new FSNetwork({
  baseURL: 'https://hooks.zapier.com/hooks/catch/13147975/blyuyh0/'
});

export class ZapierController extends FSNetwork {
  constructor(config: FSNetworkRequestConfig) {
    super(config);
  }

  deleteAccount = (email: string, store: string) =>
    this.post(`?customerEmail=${email}&store=${store}`)
}

