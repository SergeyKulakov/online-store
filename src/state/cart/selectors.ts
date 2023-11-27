import { AppStore } from '..';

export const getCartItems = (store: AppStore) => store.cart.data.value?.items ?? [];

export const getIsProductInCart = (state: AppStore, sku: string) => {
  const items = state.cart.data.value?.items || [];
  // @ts-expect-error
  return items.some(item => item.sku === sku);
};
