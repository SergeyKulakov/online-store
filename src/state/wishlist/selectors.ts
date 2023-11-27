import { AppStore } from '..';

export const getWishlistItems = (store: AppStore) => store.wishlist.listData.value?.items ?? [];
