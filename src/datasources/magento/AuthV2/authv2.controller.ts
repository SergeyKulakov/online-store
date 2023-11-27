import { magento } from '@assos/datasources';
import { removeToken, setToken } from '@assos/lib';
import { getCountry } from 'react-native-localize';
import { Constructor } from '../Base';
import { AuthV2Types } from './authv2.type';

export const AuthV2Controller =
<TBase extends Constructor>(Base: TBase) => {
  return class AuthV2Controller extends Base {

    init = async () => {
      const res = await this.post('/V2/auth/init');
      if (res.status === 200) {
        await setToken(res.data.token);

        return res.data.token;
      }

      throw Error(res.data);
    }

    refresh = async (token: string): Promise<string> => {
      const res = await this.get('/V2/auth/refresh', {
        headers: {
          store: getCountry().toLowerCase(),
          oauth_consumer_token: token
        }
      });
      if (res.status === 200) {
        await setToken(res.data.token);
        await magento.createSession(res.data.token);

        return res.data.token;
      }

      throw Error(res.data);
    }

    clean = async (): Promise<AuthV2Types.Clean.Response> => {
      const res = await this.post('/V2/auth/session/clean', {}, {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        await removeToken();

        return res.data;
      }

      throw Error(res.data);
    }
  };
};
