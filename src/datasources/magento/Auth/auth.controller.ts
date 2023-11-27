import { Constructor } from '@assos/datasources/magento/Base';

export const AuthController = <TBase extends Constructor>(Base: TBase) => {
  return class AuthController extends Base {
  };
};
