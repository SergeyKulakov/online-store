import {ProductControllersTypes} from '@assos/datasources/magento/Products';

const filterProducts = (
  products: ProductControllersTypes.Product[],
  selectedFilters: Record<string, string[]>
  ) => {


  const sizeFilter = (sizes: string[]) => {
    const filtered = products.filter(product => {
      return sizes?.every(s => product.filters.size.value.includes(s));
    });

    if (filtered.length) {
      return filtered;
    }
    return products;
  };


  const colorFilter = (colors: string[], prods: ProductControllersTypes.Product[]) => {
    if (!colors?.length) {
      return prods;
    }

    return prods.filter(product => {
      return colors?.every(c => product.colorSwatches.some(swatch => swatch.value === c));
    });
  };


  const rideFilter = (rides: string[], prods: ProductControllersTypes.Product[]) => {
    if (!rides?.length) {
      return prods;
    }

    return prods.filter(product => {
      return rides?.every(r => product.filters.ride.value.includes(r));
    });
  };


  const collectionFilter = (collections: string[], prods: ProductControllersTypes.Product[]) => {
    if (!collections?.length) {
      return prods;
    }

    return prods.filter(product => {
      return collections?.every(c => product.filters.collections.value.includes(c));
    });
  };


  const seasonFilter = (seasons: string[], prods: ProductControllersTypes.Product[]) => {
    if (!seasons?.length) {
      return prods;
    }

    return prods.filter(product => {
      return seasons?.every(s => product.filters.season_type.value.includes(s));
    });
  };


  const filteredProds =
  seasonFilter(selectedFilters.Season,
    collectionFilter(selectedFilters.Collections,
      rideFilter(selectedFilters.Ride,
        colorFilter(selectedFilters.Color,
          sizeFilter(selectedFilters.Size)
        )
      )
    )
  );

  return filteredProds;
};

export default filterProducts;
