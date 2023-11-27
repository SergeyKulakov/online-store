import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray,
  persistentLoading
} from '@assos/state/helpers';
import { productActions, ProductStore } from './types';

const INITIAL_STATE: ProductStore = {
  product: emptyAPIResult(),
  childs: emptyAPIResult()
};

export const reducer = mapReducersArray<ProductStore>([
  asyncReducer(productActions.getProduct, 'product', { loading: persistentLoading('product') }),
  asyncReducer(productActions.getProductChilds, 'childs')
], INITIAL_STATE);
