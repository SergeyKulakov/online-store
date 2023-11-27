import { AppStore } from '../index';

export const getStoresHostList = (store: AppStore) => store.config.storesHostList;

export const getPrimaryCurrency = (store: AppStore) =>
  store.config.storeDetails.value?.metadata?.currencies?.[0]?.code || '';
