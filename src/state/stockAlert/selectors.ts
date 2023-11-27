import { AppStore } from '../index';

export const getStockAlerts = (state: AppStore) => state.stockAlert.alerts.value ?? [];

export const getAlertIdForProduct = (state: AppStore, productId?: number) => {
  if (!productId) {
    return;
  }
  const alerts = state.stockAlert.alerts.value ?? [];
  return alerts.find(alert => alert.product_id === productId)?.id;
};

export const getAlertForProduct = (state: AppStore, productId: number) => {
  const alerts = state.stockAlert.alerts.value ?? [];
  return alerts.find(alert => alert.product_id === productId);
};
