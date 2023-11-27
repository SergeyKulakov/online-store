import { Action, Dispatch } from 'redux';
import { fetchWishlist } from '@assos/state/wishlist';
import { fetchStockAlerts } from '@assos/state/stockAlert';
import { fetchCustomerInfo } from '@assos/state/user';
import { fetchCart } from '@assos/state/cart';

export const fetchUserData = async (dispatch: Dispatch<Action>) => {
  await fetchWishlist(dispatch);
  await fetchStockAlerts(dispatch);
  await fetchCustomerInfo(dispatch);
  await fetchCart(dispatch);
};
