import { AsyncStorageKeys, getSID, getStorageValue, setSID } from '@assos/lib';
import { Constructor } from '../Base';
import { SessionTypes } from './session.type';


export const SessionController = <TBase extends Constructor>(Base: TBase) => {
  return class SessionController extends Base {

    createSession = async (token: string): Promise<string> => {
      const res = await this.post('/V1/session/init', {}, {
        headers: {
          store: await getStorageValue(AsyncStorageKeys.Store) ?? 'us',
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 200) {
        await setSID(res.data);

        return res.data;
      }

      throw new Error(res.data);
    }

    checkSession = async (): Promise<SessionTypes.Session.Response> => {
      const SID = await getSID();
      const res = await this.get(`/V1/session/${SID}`, {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        return res.data.session_data.customer_data.customer_type === 'guest' ? false : true;
      }

      return false;
    }
  };
};
