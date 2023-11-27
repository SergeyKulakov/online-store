import { AppStore } from '../index';


export const getUserLoginStatus = (state: AppStore) => state.user.isLoggedIn.value;
export const getCustomerInfo = (state: AppStore) => state.user.customerInfo.value;
export const getCustomerEmail = (state: AppStore) => state.user.customerInfo.value?.email ?? '';

export const getRegistrationError = (state: AppStore): string | undefined => {
  const error = state.user.data.error;
  if (!error) {
    return undefined;
  }
  return error.response?.data?.error?.message || error.message;
};
