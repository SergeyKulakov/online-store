import { actionTypeGenerator, APIResult } from '@assos/state/helpers';
import { FSNetworkError } from '@brandingbrand/fsnetwork';
import { StockAlertTypes } from '@assos/datasources/magento/Alert/stockAlert.types';

const stockAlertActionGenerator = actionTypeGenerator('STOCK_ALERT');

export const stockAlertActions = {
  fetch: stockAlertActionGenerator.async('FETCH'),
  add: stockAlertActionGenerator.async('ADD'),
  remove: stockAlertActionGenerator.async('REMOVE')
};

export interface StockAlertStore {
  alerts: APIResult<StockAlertTypes.StockAlert[], FSNetworkError>;
  addStatus: APIResult<null, FSNetworkError>;
  removeStatus: APIResult<null, FSNetworkError>;
}
