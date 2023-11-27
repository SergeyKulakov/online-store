import { setSID } from './../../../lib/sensitiveInfo';
import { getCountry } from 'react-native-localize';
import { Constructor } from '../Base';
import { SessionV2Types } from './sessionv2.type';

export const SessionV2Controller = <TBase extends Constructor>(Base: TBase) => {
  return class SessionV2Controller extends Base {
    initSessionV2 = async (): Promise<SessionV2Types.SessionV2.Response> => {
      const res = await this.post(
        '/V2/session/init',
        {},
        {
          headers: {
            store: getCountry().toLowerCase()
          }
        }
      );

      if (res.status === 200) {
        await setSID(res.data);
        return res.data;
      }

      throw new Error(res.data);
    }

    deleteSessionV2 = async (id: string): Promise<string> => {
      const res = await this.delete(
        `/V2/session/${id}`,
        {}
      );

      if (res.status === 204) {
        await setSID('');

        return '';
      }

      throw new Error(res.data);
    }
  };
};
