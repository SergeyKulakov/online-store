import {
  asyncReducer,
  emptyAPIResult,
  mapReducersArray
} from '@assos/state/helpers';
import { categoryActions, CategoryStore } from './types';

const INITIAL_STATE: CategoryStore = {
  data: emptyAPIResult()
};


export const reducer = mapReducersArray<CategoryStore>([
  asyncReducer(categoryActions.getData, 'data')
], INITIAL_STATE);
