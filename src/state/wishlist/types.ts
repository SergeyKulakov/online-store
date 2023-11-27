import { actionTypeGenerator, APIResult } from '@assos/state/helpers';
import { FSNetworkError } from '@brandingbrand/fsnetwork';
import { WishlistTypes } from '@assos/datasources/magento/Wishlist';

const wishlistActionGenerator = actionTypeGenerator('WISHLIST');

export const wishlistActions = {
  getWishlist: wishlistActionGenerator.async('FETCH'),
  addToWishlist: wishlistActionGenerator.async('ADD'),
  removeFromWishlist: wishlistActionGenerator.async('REMOVE')
};

export interface WishlistStore {
  listData: APIResult<WishlistTypes.Wishlist, FSNetworkError>;
  addStatus: APIResult<null, FSNetworkError>;
  removeStatus: APIResult<null, FSNetworkError>;
}
