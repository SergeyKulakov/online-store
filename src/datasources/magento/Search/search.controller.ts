import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { Constructor } from '@assos/datasources/magento/Base';
import { normalizeProducts } from '@assos/Normalizers/ProductNormalizer';


export const SearchController = <TBase extends Constructor>(Base: TBase) => {
  return class SearchController extends Base {

    searchSuggestions =
      async (terms: string):
        Promise<ProductControllersTypes.Product[]> => {
        const filter = {
          where: {
            and: [
              {
                visible: 1
              }
            ]
          },
          limit: 5,
          offset: 0
        };

        const res = await this.get(
          `/V1/catalog/products/search/${terms}?filter=${JSON.stringify(filter)}`,
          {
            headers: await this.magentoHeaders()
          }
        );

        if (res.status === 200) {
          const products = await normalizeProducts(res.data);
          return products;
        }

        throw Error(res.data);

      }

    lazyLoadingSearch = async (searchTerm: string, filter: ProductControllersTypes.Query)
      : Promise<ProductControllersTypes.Product[]> => {
      const res = await this.get(
        `/V1/catalog/products/search/${searchTerm}?filter=${JSON.stringify(filter)}`,
        {
          headers: await this.magentoHeaders()
        }
      );
      if (res.status === 200) {
        const rawProducts = res.data as ProductControllersTypes.Product[];
        const products = await normalizeProducts(rawProducts);
        return products;
      }
      throw Error(res.data);
    }
    searchResultsCount = async (
      searchTerm: string,
      filter: ProductControllersTypes.Query
    ): Promise<number> => {
      const {where} = filter;
      const res = await this.get(
        `/V1/catalog/products/search/count/${searchTerm}?where=${JSON.stringify(where)}`,
        {headers: await this.magentoHeaders()}
      );
      if (res.status === 200) {
        return res.data.count;
      }
      throw Error(res.data);
    }
  };

};

