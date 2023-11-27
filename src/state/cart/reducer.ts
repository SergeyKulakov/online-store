import { cartActions, CartStore } from './types';
import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray,
  persistentLoading
} from '../helpers';

const INITIAL_STATE: CartStore = {
  data: emptyAPIResult(),
  addStatus: emptyAPIResult()
};

export const reducer = mapReducersArray<CartStore>([
  asyncReducer(cartActions.get, 'data', { loading: persistentLoading('data') })
], INITIAL_STATE);
