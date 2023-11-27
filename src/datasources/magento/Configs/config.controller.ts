import { Constructor } from './../Base/base.type';
import {ConfigControllerTypes} from './config.type';

export const ConfigController = <TBase extends Constructor>(Base: TBase) => {
  return class AccountController extends Base {

    bootstrap = async (): Promise<ConfigControllerTypes.Bootstrap.Response> => {

      const res = await this.get('/V1/configs/bootstrap');

      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    redirects = async (): Promise<ConfigControllerTypes.Redirects.Response> => {
      const res = await this.get('/V1/configs/redirects');

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }

  };

};
