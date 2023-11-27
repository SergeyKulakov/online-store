import React, { FC, useEffect, useMemo, useState } from 'react';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { magento } from '@assos/datasources';
import { noop } from 'lodash';
import { FilterOption, useFilterOptions } from '@assos/components/PIP/Hooks/useFilterOptions';

const limit = 6;
const increment = 6;

export interface FilterEntry {
  section: string;
  name: string;
}


export interface ProductContext {
  products: ProductControllersTypes.Product[];
  sortOptions: ReadonlyArray<SortOptions>;
  selectedOption: SortOptions;
  sorting: boolean;
  selectedFilters: Record<string, string[]>;
  filterOptions: FilterOption[];
  sortBy: (text: SortOptions) => void;
  filterBy: (selectedItems: Record<string, string[]>) => void;
  clearFilters: () => void;
  clearSingleFilter: (filter: FilterEntry) => void;
  loadMoreData: () => void;
  title?: string;
  scrollEnd: boolean;
}

export const optionsMap = {
  'Best selection': '',
  'Product Name ASC' : 'sortables.name.value ASC',
  'Product Name DESC' : 'sortables.name.value DESC',
  'Price ASC': 'pricing.final_price ASC',
  'Price DESC' : 'pricing.final_price DESC'
};

export type SortOptions = keyof typeof optionsMap;

const sortOptions = Object.keys(optionsMap).map(o => o as SortOptions);

export const ProductContext = React.createContext<ProductContext>({
  products: [],
  sortOptions: [],
  selectedOption: 'Best selection',
  sorting: false,
  filterOptions: [],
  selectedFilters: {},
  sortBy: noop,
  filterBy: noop,
  clearFilters: noop,
  clearSingleFilter: noop,
  loadMoreData: noop,
  scrollEnd: false
});

interface ProductProviderProps {
  isSearch?: boolean;
  searchTerm: string;
  category?: string;
  selection: keyof typeof optionsMap;
  setSelection: (s: string) => void;
}

const ProductProvider: FC<ProductProviderProps> = (
  { searchTerm, children, category, selection, setSelection }
) => {


  const [products, setProducts] = useState<ProductControllersTypes.Product[]>([]);
  const [selectedOption, setSelectedOption] = useState<SortOptions>(selection);
  const [sorting, setSorting] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const scrollEnd = true;
  const [offset, setOffset] = useState(0);
  const filteredQuery = useMemo(() => {
    const queryFilters = Object.keys(selectedFilters).reduce<any[]>((acc, key) => {
      if (selectedFilters[key].length) {
        acc.push({ [`filters.${key}.value`]: { inq: selectedFilters[key] } });
      }
      return acc;
    }, []);

    return {
      limit,
      where: {
        and: [
          {
            categories: category
          },
          {
            visible: 1
          },
          {
            ['filters.hide_on_categories.value']: {
              nin: [
                category
              ]
            }
          },
          ...queryFilters
        ]
      },
      order: [optionsMap[selectedOption]]
    };
  }, [selectedFilters, selectedOption]);

  const filterOptions = useFilterOptions(category);

  const fetchProducts =
    async (query: ProductControllersTypes.Query): Promise<ProductControllersTypes.Product[]> => {
      return magento.queryProducts(query);
    };

  useEffect(() => {
    setOffset(0);
    fetchProducts(filteredQuery).then(setProducts).catch(noop);
  }, [filteredQuery]);

  const loadMoreData = async () => {
    const newOffset = offset + increment;
    setOffset(newOffset);
    const newItems = await magento.queryProducts({...filteredQuery, offset: newOffset});
    setProducts(prev => [...prev, ...newItems]);
  };

  const filterBy = (selectedItems: Record<string, string[]>) => {
    setSelectedFilters(selectedItems);
  };


  const clearFilters = () => {
    setSelectedFilters({});
  };

  const clearSingleFilter = ({section, name}: FilterEntry) => {
    if (Object.keys(selectedFilters).length === 2) {
      setSelectedFilters({});
    }
    const filteredSection = selectedFilters[section].filter(f => f !== name);
    setSelectedFilters({...selectedFilters, [section]: filteredSection});
  };

  const handleSetSelection = (option: keyof typeof optionsMap) => {
    setSelection(option);
    setSelectedOption(option);
  };

  const sortBy = async (option: SortOptions) => {
    if (selectedOption === option) {
      return;
    }
    setSorting(true);
    handleSetSelection(option);
    setSorting(false);
  };

  return (
    <ProductContext.Provider
      value={{
        sorting,
        products,
        sortOptions,
        selectedOption,
        filterOptions,
        selectedFilters,
        title: searchTerm,
        sortBy,
        filterBy,
        clearFilters,
        clearSingleFilter,
        loadMoreData,
        scrollEnd
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
