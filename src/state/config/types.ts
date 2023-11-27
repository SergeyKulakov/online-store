import {ConfigControllerTypes} from '@assos/datasources/magento/Configs';
import { StoreControllerTypes } from '@assos/datasources/magento/Store/store.types';
import { FSNetworkError } from '@brandingbrand/fsnetwork';
import { actionTypeGenerator, APIResult } from '../helpers';

const storeActionGenerator = actionTypeGenerator('CONFIG');


export const configStoreActions = {
  fetchStoresHostList: storeActionGenerator.async('FETCH_STORES_LIST'),
  fetchStoreDetails: storeActionGenerator.async('FETCH_STORE_DETAILS')
};

export interface ConfigStore {
  storesHostList: APIResult<ConfigControllerTypes.Bootstrap.StoreHost[], FSNetworkError>;
  storeDetails: APIResult<StoreControllerTypes.Response, FSNetworkError>;
}
