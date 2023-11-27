import { Constructor } from './../Base/base.type';
import { StoreControllerTypes } from './store.types';
import { AsyncStorageKeys, getStorageValue } from '@assos/lib';

export const StoreController = <TBase extends Constructor>(Base: TBase) => {
  return class AccountController extends Base {
    fetchStoreDetails = async (): Promise<StoreControllerTypes.Response> => {
      const res = await this.get(
        `/V1/core/stores/${
          (await getStorageValue(AsyncStorageKeys.Store)) ??
          'us'
        }`
      );

      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }
  };
};
