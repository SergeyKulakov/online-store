import { categoryActions } from './types';
import { magento } from './../../datasources/magento/index';
import { Action, Dispatch } from 'redux';

export const fetchCategories = async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({type: categoryActions.getData.start});
    const categories = await magento.menus();
    dispatch({type: categoryActions.getData.done, value: categories});
  } catch (error) {
    dispatch({type: categoryActions.getData.fail, value: error});
  }
};
