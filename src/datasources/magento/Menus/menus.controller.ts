import { AsyncStorageKeys, getStorageValue } from '@assos/lib';

import { Constructor } from '../Base';
import * as normalizers from './menus.normalizers';

export const MenusController = <TBase extends Constructor>(Base: TBase) => {
  return class MenusController extends Base {
    menus = async () => {
      const res = await this.get('/V1/cms/menus', {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        const store = await getStorageValue(AsyncStorageKeys.Store);

        return normalizers.menus(res, store ?? 'us');
      }

      throw Error(res.data);
    }
  };
};
