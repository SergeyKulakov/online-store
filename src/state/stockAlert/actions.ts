import { Action, Dispatch } from 'redux';
import { magento } from '@assos/datasources';
import { asyncAction } from '@assos/state/helpers';
import { stockAlertActions } from './types';

export const fetchStockAlerts = async (dispatch: Dispatch<Action>) => {
  const fetchStockAlertsPromise = magento.getStockAlerts();
  asyncAction(fetchStockAlertsPromise, stockAlertActions.fetch, dispatch);
};

export const addStockAlert = async (
  dispatch: Dispatch<Action>,
  productId: number,
  email: string
) => {
  try {
    dispatch({type: stockAlertActions.add.start});
    await magento.addStockAlert(productId, email);
    await fetchStockAlerts(dispatch);
    dispatch({type: stockAlertActions.add.done});
  } catch (error) {
    dispatch({type: stockAlertActions.add.fail, error});
  }
};

export const removeStockAlert = async (dispatch: Dispatch<Action>, stockAlertId: string) => {
  try {
    dispatch({type: stockAlertActions.remove.start});
    await magento.removeStockAlert(stockAlertId);
    await fetchStockAlerts(dispatch);
    dispatch({type: stockAlertActions.remove.done});
  } catch (error) {
    dispatch({type: stockAlertActions.remove.fail, error});
  }
};
