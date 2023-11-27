import { useEffect, useState} from 'react';
import { magento } from '@assos/datasources';


export enum FirstLevelItems {
  Size = 'Size',
  Color = 'Color',
  Ride = 'Ride',
  Collections = 'Collections',
  Season = 'Season'
}

export interface FilterValue {
  value: string;
  total: number;
  swatch: {
    type?: string;
    value?: string;
  };
}

export interface FilterOption {
  code: string;
  label: string;
  tot: number;
  values: FilterValue[];
}

export const useFilterOptions = (category?: string) => {
  let mounted = true;
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([]);
  const setOptionsIfMounted = (categories: any) => {
    if (mounted) {
      setFilterOptions(categories);
    }
  };

  useEffect(() => {
    if (category) {
      magento.fetchFilters(category).then(setOptionsIfMounted).catch();
    }
  }, [category]);

  useEffect(() => {
    return () => { mounted = false; };
  });

  return filterOptions;
};
