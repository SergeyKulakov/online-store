import { Action, Dispatch } from 'redux';
import { getRecentlyViewedItems, setRecentlyViewedItems } from '@assos/lib';
import { recentlyViewedActions } from './types';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

export async function loadRecentlyViewed(dispatch: Dispatch<Action>): Promise<void> {
  try {
    const recentlyViewed = await getRecentlyViewedItems();
    dispatch({ type: recentlyViewedActions.load.done, value: recentlyViewed });
  } catch (error) {
    dispatch({ type: recentlyViewedActions.load.fail, error });
  }
}

export async function addRecentlyViewed(
  dispatch: Dispatch<Action>,
  item: ProductControllersTypes.Product
): Promise<void> {
  try {
    const newList = await setRecentlyViewedItems(item);
    dispatch({ type: recentlyViewedActions.add.done, value: newList });
  } catch (error) {
    dispatch({ type: recentlyViewedActions.add.fail, error });
  }
}

