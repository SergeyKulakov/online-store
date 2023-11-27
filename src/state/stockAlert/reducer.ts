import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray
} from '@assos/state/helpers';
import { stockAlertActions, StockAlertStore } from './types';

const INITIAL_STATE: StockAlertStore = {
  alerts: emptyAPIResult(),
  addStatus: emptyAPIResult(),
  removeStatus: emptyAPIResult()
};

export const reducer = mapReducersArray<StockAlertStore>([
  asyncReducer(stockAlertActions.fetch, 'alerts'),
  asyncReducer(stockAlertActions.add, 'addStatus'),
  asyncReducer(stockAlertActions.remove, 'removeStatus')
], INITIAL_STATE);
