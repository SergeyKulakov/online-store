import { fetchCategories } from '@assos/state/categories/actions';
import { setIsLoggedIn } from '@assos/state/user';
import { setupAnalytics } from './setupAnalytics';
import { fetchStoreDetails, fetchStoresHostList } from '@assos/state/config/index';
import { fetchUserData } from './fetchUserData';
import {FSAppBeta} from '@brandingbrand/fsapp';
import { determineUserSignInStatus } from './determineUserSignInStatus';
import { bottomTabMergeOptions } from './navigation';

export const onLaunchApp = async ({ app }: { app: FSAppBeta }) => {
  const dispatch = app.store?.dispatch;

  if (!dispatch) {
    return app;
  }

  try {
    bottomTabMergeOptions();
    await fetchStoresHostList(dispatch);
    await fetchStoreDetails(dispatch);
    await setupAnalytics();
    await fetchCategories(dispatch);
    const isLoggedIn = await determineUserSignInStatus();
    if (isLoggedIn) {
      setIsLoggedIn(dispatch, true);
      await fetchUserData(dispatch);
    }
  } catch (error) {
    console.error('An Error Occured on app launch', error);
  }

  return app;
};

export default onLaunchApp;
