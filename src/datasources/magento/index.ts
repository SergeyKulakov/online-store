import { noop } from 'lodash-es';
import { env } from '@brandingbrand/fsapp';
import DeviceInfo from 'react-native-device-info';
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { FSNetworkRequestConfig } from '@brandingbrand/fsnetwork';

import {
  AsyncStorageKeys,
  emptyString,
  getSID,
  getStorageValue,
  getToken,
  isExpired,
  refreshCookies
} from '@assos/lib';

import { CMSController } from './Cms';
import { BaseController } from './Base';
import { UserController } from './User';
import { CartController } from './Cart';
import { MenusController } from './Menus';
import { AuthV2Controller } from './AuthV2';
import { SearchController } from './Search';
import { ConfigController } from './Configs';
import { AccountController } from './Account';
import { SessionController } from './Session';
import { StockAlertController } from './Alert';
import { CustomerController } from './Customer';
import { ProductsController } from './Products';
import { WishlistController } from './Wishlist';
import { SessionV2Controller } from './SessionV2';
import { CategoriesController } from './Categories';
import { OpenWeatherController } from './Openweather';
import { StoreController } from './Store';

const MagentoController = MenusController(
  CategoriesController(
    CartController(
      OpenWeatherController(
        CMSController(
          SearchController(
            StockAlertController(
              WishlistController(
                UserController(
                  ProductsController(
                    CustomerController(
                      AccountController(
                        AuthV2Controller(
                          StoreController(
                            ConfigController(
                              SessionController(
                                SessionV2Controller(BaseController)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

class Magento extends MagentoController {
  constructor(props: FSNetworkRequestConfig) {
    super(props);

    this.setInterceptor({
      requestIntercept: async ({
        headers,
        ...req
      }: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        return {
          ...req,
          headers: {
            ...headers,
            ['User-Agent']: `${await DeviceInfo.getUserAgent()} ASSOS-APP`
          }
        };
      }
    });
  }

  magentoHeaders = async (): Promise<AxiosRequestHeaders | undefined> => {
    let token = await getToken();
    let sid = await getSID();

    if (!token) {
      token = await this.init().catch(emptyString);
      sid = await this.createSession(token as string).catch(emptyString);
      await refreshCookies().catch(noop);
    }

    if (token && isExpired(token)) {
      token = await this.refresh(token).catch(emptyString);
      sid = await this.createSession(token).catch(emptyString);
      await refreshCookies().catch(noop);
    }

    if (!sid) {
      sid = await this.createSession(token as string).catch(emptyString);
      await refreshCookies().catch(noop);
    }

    return {
      store: await getStorageValue(AsyncStorageKeys.Store) ?? 'us',
      Authorization: `Bearer ${token}`,
      sid
    };
  }
}

export const magento = new Magento({
  baseURL: env.magento.baseURL,
  headers: {
    oauth_consumer_key: env.magento.consumerKey,
    oauth_consumer_secret: env.magento.consumerSecret,
    'Content-Type': 'application/json'
  }
});
