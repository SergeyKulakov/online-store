import { useEffect, useState } from 'react';
import { magento } from '@assos/datasources';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

interface LazyLoadingState {
  products: ProductControllersTypes.Product[];
  loaded: boolean;
  error: any;
}

const initialLazyLoadingState: LazyLoadingState = {
  products: [],
  loaded: false,
  error: undefined
};

export const useLazyLoadingSearch = () => {
  let mounted = true;
  const [lazyLoadingState, setLazyLoadingState] =
    useState<LazyLoadingState>(initialLazyLoadingState);
  const {products, loaded, error} = lazyLoadingState;
  const [count, setCount] = useState(0);

  const setError = (error: any) => {
    if (mounted) {
      setLazyLoadingState(state => ({...state, loading: false, error}));
    }
  };

  const concatProducts = (newProds: ProductControllersTypes.Product[]) => {
    if (mounted) {
      setLazyLoadingState({products: [...products, ...newProds], loaded: true, error: undefined});
    }
  };

  const setInitialProducts = (products: ProductControllersTypes.Product[]) => {
    if (mounted) {
      setLazyLoadingState({products, loaded: true, error: undefined});
    }
  };

  const setCountIfMounted = (num: number) => {
    if (mounted) {
      setCount(num);
    }
  };

  const getInitialProducts = (searchTerm: string, filter: ProductControllersTypes.Query) => {
    setLazyLoadingState(initialLazyLoadingState);
    setCount(0);
    magento.searchResultsCount(searchTerm, filter).then(setCountIfMounted).catch(setError);
    magento.lazyLoadingSearch(searchTerm, filter)
      .then(setInitialProducts).catch(setError);
  };

  const updateProducts = (searchTerm: string, filter: ProductControllersTypes.Query) => {
    magento.lazyLoadingSearch(searchTerm, filter)
      .then(concatProducts).catch(setError);
  };

  useEffect(() => {
    return () => { mounted = false; };
  }, []);
  return {products, loaded, error, count, getInitialProducts, updateProducts};
};
