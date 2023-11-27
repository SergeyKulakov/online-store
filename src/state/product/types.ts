import { actionTypeGenerator, APIResult } from '@assos/state/helpers';
import { FSNetworkError } from '@brandingbrand/fsnetwork';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

const productActionGenerator = actionTypeGenerator('PRODUCT');

export const productActions = {
  getProduct: productActionGenerator.async('FETCH'),
  getProductChilds: productActionGenerator.async('FETCH_CHILDS')
};

export interface ProductStore {
  product: APIResult<ProductControllersTypes.Product, FSNetworkError>;
  childs: APIResult<ProductControllersTypes.Product[], FSNetworkError>;
}
