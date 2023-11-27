import { CommerceTypes } from '@brandingbrand/fscommerce';
import { FSNetworkError } from '@brandingbrand/fsnetwork';

import { actionTypeGenerator, APIResult } from '../helpers';

const cartActionGenerator = actionTypeGenerator('CART');

export const cartActions = {
  get: cartActionGenerator.async('GET'),
  add: cartActionGenerator.async('ADD')
};

export interface CartStore {
  data: APIResult<CommerceTypes.Cart, FSNetworkError>;
  addStatus: APIResult<null, FSNetworkError>;
}
