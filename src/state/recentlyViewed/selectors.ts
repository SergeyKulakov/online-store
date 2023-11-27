import { AppStore } from '..';

export const getRecentlyViewed = (store: AppStore) => store.recentlyViewed.list.value ?? [];
