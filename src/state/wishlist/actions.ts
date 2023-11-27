import { Action, Dispatch } from 'redux';
import { magento } from '@assos/datasources';
import { asyncAction } from '@assos/state/helpers';
import { wishlistActions } from './types';

export const fetchWishlist = async (
  dispatch: Dispatch<Action>
) => {
  const fetchWishlistPromise = magento.getWishlist();
  asyncAction(fetchWishlistPromise, wishlistActions.getWishlist, dispatch);
};

export const addToWishlist = async (
  dispatch: Dispatch<Action>,
  sku: string
) => {
  try {
    dispatch({type: wishlistActions.addToWishlist.start});
    await magento.addToWishlist(sku);
    await fetchWishlist(dispatch);
    dispatch({type: wishlistActions.addToWishlist.done, value: null});
  } catch (error) {
    dispatch({type: wishlistActions.addToWishlist.fail, error});
  }
};

export const removeFromWishlist = async (
  dispatch: Dispatch<Action>,
  id: string
) => {
  try {
    dispatch({type: wishlistActions.removeFromWishlist.start});
    await magento.removeFromWishlist(id);
    await fetchWishlist(dispatch);
    dispatch({type: wishlistActions.removeFromWishlist.done, value: null});
  } catch (error) {
    dispatch({type: wishlistActions.removeFromWishlist.fail, error});
  }
};
