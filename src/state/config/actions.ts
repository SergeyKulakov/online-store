import { magento } from '@assos/datasources';
import {asyncAction} from '@assos/state/helpers';
import { Action, Dispatch } from 'redux';
import { configStoreActions } from './types';

export async function fetchStoresHostList(
  dispatch: Dispatch<Action>
): Promise<void> {
  const storesList = new Promise((res, rej) => {
    magento.bootstrap().then(data => res(data.stores_list_hosts)).catch(rej);
  });
  asyncAction(storesList, configStoreActions.fetchStoresHostList, dispatch);
}

export const fetchStoreDetails = async (dispatch: Dispatch<Action>) => {
  const storeDetailsPromise = magento.fetchStoreDetails();
  asyncAction(storeDetailsPromise, configStoreActions.fetchStoreDetails, dispatch);
};
