import {magento} from '@assos/datasources';
import { Constructor } from '@assos/datasources/magento/Base';
import { UserType } from '@assos/datasources/magento/User/user.type';
import { removeToken, setToken } from '@assos/lib';

export const UserController = <TBase extends Constructor>(Base: TBase) => {
  return class UserController extends Base {

    register = async (request: UserType.Register.Request): Promise<UserType.Register.Response> => {
      const res = await this.post('/V1/crm/register', request, {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }

    login = async (request: UserType.Login.Request): Promise<UserType.Token> => {
      const headers = await this.magentoHeaders();
      const res = await this.post('/V1/crm/login', request, { headers });

      if (res.status === 200) {
        await setToken(res.data);
        await magento.createSession(res.data);

        return res.data;
      }
      throw Error(res.data);
    }

    socialLogin = async <T>(request: T): Promise<UserType.Token> => {
      const headers = await this.magentoHeaders();
      const res = await this.post('/V1/crm/social/login', request as any, { headers });
      if (res.status === 200) {
        await setToken(res.data);
        await magento.createSession(res.data);

        return res.data;
      }

      throw Error(res.data);
    }

    logout = async (): Promise<void> => {
      const headers = await this.magentoHeaders();
      const res = await this.delete('V1/session', { headers });

      if (res.status === 200 || 204) {
        await removeToken();
        return res.data;
      }
      throw Error(res.data);
    }

    refreshToken = async (): Promise<boolean> => {
      const res = await this.post('/V1/crm/token/refresh');

      return res.status === 200;
    }
  };
};
