import { ConfigStore, configStoreActions } from './types';
import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray
} from '../helpers';

const INITIAL_STATE: ConfigStore = {
  storesHostList: emptyAPIResult(),
  storeDetails: emptyAPIResult()
};


export const reducer = mapReducersArray<ConfigStore>([
  asyncReducer(configStoreActions.fetchStoresHostList, 'storesHostList'),
  asyncReducer(configStoreActions.fetchStoreDetails, 'storeDetails')
], INITIAL_STATE);
