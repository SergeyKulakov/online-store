import { Action, Dispatch } from 'redux';

import { cartActions } from './types';
import { asyncAction } from '../helpers';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { updateCartCountBadge } from '@assos/lib/navigationEventHandlers.native';
import { env } from '@brandingbrand/fsapp';
import { magento } from '@assos/datasources';

const getCartQty = (cart?: CommerceTypes.Cart): number =>
  cart ? cart.items.reduce((acc, el) => acc + el.quantity, 0) : 0;

const updateCartCount = (cart?: CommerceTypes.Cart) => {
  if (env.localStorageCart) {
    const qty = getCartQty();
    setTimeout(() => {
      updateCartCountBadge(qty);
    }, 0);
  } else {
    updateCartCountBadge(cart?.itemCount);
  }
  return cart;
};

export async function fetchCart(
  dispatch: Dispatch<Action>
): Promise<void> {
  const fetchCartPromise = magento.fetchCart();
  updateCartCount();
  asyncAction(fetchCartPromise, cartActions.get, dispatch);
}

export const addToCart = async (sku: string, qty: number, dispatch: Dispatch<Action>) => {
  dispatch({type: cartActions.add.start});
  try {
    await magento.addVariantToCart(sku, qty);
    await fetchCart(dispatch);
    dispatch({type: cartActions.add.done});
  } catch (error) {
    dispatch({type: cartActions.add.fail, error});
  }

};
