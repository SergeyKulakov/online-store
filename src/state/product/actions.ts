import { Action, Dispatch } from 'redux';
import { magento } from '@assos/datasources';
import { asyncAction } from '@assos/state/helpers';
import { productActions } from './types';

export const fetchProductById = async (
  dispatch: Dispatch<Action>,
  id: string
) => {
  const fetchProductPromise = magento.fetchProductById(id);
  asyncAction(fetchProductPromise, productActions.getProduct, dispatch);
  await fetchProductPromise;
};

export const fetchProductChilds = async (dispatch: Dispatch<Action>, childs: number[]) => {
  const fetchChildsPromise = magento.fetchProductChilds(childs);
  asyncAction(fetchChildsPromise, productActions.getProductChilds, dispatch);
};
