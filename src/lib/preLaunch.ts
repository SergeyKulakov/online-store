import { getLocales } from 'react-native-localize';

import { i18n } from './translations';
import { magento } from '@assos/datasources';

import {AsyncStorageKeys, setStorageValue} from './asyncStorage';

export const preLaunch = async () => {
  try {
    const bootstrap = await magento.bootstrap();

    const deviceLocale = getLocales()?.[0]
      ?.languageTag.replace('-', '_')
      .toLocaleLowerCase();
    const potentialStoreCode = deviceLocale.split('_').reverse().join('_');

    if (bootstrap.store_list?.find(datum => datum === potentialStoreCode)) {
      const store = bootstrap.stores_list_hosts?.find(datum => datum.code === potentialStoreCode);

      i18n.setLocale(store?.locale?.split('_')?.[0] ?? 'en');
      return setStorageValue(AsyncStorageKeys.Store, store?.code ?? 'us');
    }

    if (
      bootstrap.store_list?.find(datum => {
        return datum === potentialStoreCode.split('_')?.[0];
      })
    ) {
      const store = bootstrap.stores_list_hosts
        ?.find(datum => datum.code === potentialStoreCode.split('_')?.[0]);

      i18n.setLocale(store?.locale?.split('_')?.[0] ?? 'en');
      return setStorageValue(AsyncStorageKeys.Store, store?.code ?? 'us');
    }
  } catch {
    i18n.setLocale('en');
    return setStorageValue(AsyncStorageKeys.Store, 'us');
  }
};
