import { Constructor } from '../Base';
import { CustomerTypes } from './customer.types';

export const CustomerController = <TBase extends Constructor>(Base: TBase) => {
  return class CustomerController extends Base {
    getCustomerData = async (): Promise<CustomerTypes.CustomerInfo> => {
      const res = await this.get('/V1/crm/customer/me', {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        return res.data;
      }

      throw Error(res.data);
    }
  };
};
