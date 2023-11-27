import { asyncReducer, emptyAPIResult, mapReducersArray, persistentLoading } from '../helpers';
import { recentlyViewedActions, RecentlyViewedStore } from './types';

const INITIAL_STATE: RecentlyViewedStore = {
  list: emptyAPIResult()
};

export const reducer = mapReducersArray<RecentlyViewedStore>([
  asyncReducer(recentlyViewedActions.load, 'list'),
  asyncReducer(recentlyViewedActions.add, 'list', {
    loading: persistentLoading('list')
  })
], INITIAL_STATE);
