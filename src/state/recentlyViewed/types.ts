import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { actionTypeGenerator, APIResult } from '../helpers';

const recentlyViewedGenerator = actionTypeGenerator('RECENTLY_VIEWED');
export const recentlyViewedActions = {
  load: recentlyViewedGenerator.async('LOAD'),
  add: recentlyViewedGenerator.async('ADD')
};

export interface RecentlyViewedStore {
  list: APIResult<ProductControllersTypes.Product[], string>;
}
