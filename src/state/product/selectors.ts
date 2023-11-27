import { AppStore } from '..';

export const getProduct = (store: AppStore) => store.product.product.value;

export const getProductChilds = (store: AppStore) => store.product.childs?.value ?? [];
