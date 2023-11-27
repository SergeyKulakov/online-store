import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray
} from '@assos/state/helpers';
import { wishlistActions, WishlistStore } from './types';

const INITIAL_STATE: WishlistStore = {
  listData: emptyAPIResult(),
  addStatus: emptyAPIResult(),
  removeStatus: emptyAPIResult()
};

export const reducer = mapReducersArray<WishlistStore>([
  asyncReducer(wishlistActions.getWishlist, 'listData'),
  asyncReducer(wishlistActions.addToWishlist, 'addStatus'),
  asyncReducer(wishlistActions.removeFromWishlist, 'removeStatus')
], INITIAL_STATE);
