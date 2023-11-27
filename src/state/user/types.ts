import { actionTypeGenerator, APIResult } from '@assos/state/helpers';
import { FSNetworkError } from '@brandingbrand/fsnetwork';
import { UserType } from '@assos/datasources/magento/User';
import { CustomerTypes } from '@assos/datasources/magento/Customer/customer.types';

const userActionGenerator = actionTypeGenerator('USER');

export const userActions = {
  register: userActionGenerator.async('REGISTER'),
  setIsLoggedIn: userActionGenerator.async('SET_IS_LOGGED_IN'),
  fetchCustomerInfo: userActionGenerator.async('CUSTOMER_INFO')
};

export interface UserStore {
  data: APIResult<UserType.Register.Response, FSNetworkError>;
  customerInfo: APIResult<CustomerTypes.Address, FSNetworkError>;
  isLoggedIn: APIResult<boolean, FSNetworkError>;
}
