import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray
} from '@assos/state/helpers';
import { userActions, UserStore } from './types';

const INITIAL_STATE: UserStore = {
  data: emptyAPIResult(),
  isLoggedIn: emptyAPIResult(),
  customerInfo: emptyAPIResult()
};


export const reducer = mapReducersArray<UserStore>([
  asyncReducer(userActions.register, 'data'),
  asyncReducer(userActions.setIsLoggedIn, 'isLoggedIn'),
  asyncReducer(userActions.fetchCustomerInfo, 'customerInfo')
], INITIAL_STATE);
