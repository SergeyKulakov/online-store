import { Constructor } from '../Base';
import { AccountTypes } from './account.type';


export const AccountController = <TBase extends Constructor>(Base: TBase) => {
  return class AccountController extends Base {
    emailCheck = async (
      data: AccountTypes.CheckEmail.Request
    ): Promise<AccountTypes.CheckEmail.Response> => {
      const res = await this.post('/V1/account/email/check');

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }
    passwordForgot = async (email: string) => {
      const res = await this.post(
        '/V1/account/password/forgot',
        {
          email
        },
        { headers: await this.magentoHeaders() }
      );

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }
    passwordReset = async (
      data: AccountTypes.PasswordReset.Request
    ): Promise<AccountTypes.PasswordReset.Response> => {
      const res = await this.post('/V1/account/password/reset');

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }
  };
};
