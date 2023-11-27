import { normalizeProduct, normalizeProducts } from './../../../Normalizers/ProductNormalizer';

import { Constructor } from '../Base/base.type';
import {ProductControllersTypes} from './products.type';

export const ProductsController = <TBase extends Constructor>(Base: TBase) => {
  return class AccountController extends Base {

    queryProducts = async (query: ProductControllersTypes.Query):
    Promise<ProductControllersTypes.Response> => {
      const res = await this.get(`/V1/catalog/products?filter=${JSON.stringify(query)}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        const vars = await normalizeProducts(res.data);
        return vars;
      }
      throw Error(res.data);
    }

    fetchProductVariants = async (query: ProductControllersTypes.VariantsQuery):
    Promise<ProductControllersTypes.Response> => {
      const res = await this.get(`/V1/catalog/products?filter=${JSON.stringify(query)}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    fetchFilters = async (category: string) => {
      const where = {
        and: [
          {
            categories: {
              inq: [Number(category)]
            }},
          {
            'attributes.platform_visibility.value': {
              inq: [
                'Any',
                'ASSOS-APP'
              ]
            }
          }

        ]
      };

      const res = await this.get(`/V1/catalog/products/layered?where=${JSON.stringify(where)}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    fetchAllVariants = async (names: string[]): Promise<ProductControllersTypes.Response> => {
      const filter = {
        where: {
          visible: '1',
          and: [
            {
              name: {
                inq: names
              }
            },
            {
              'attributes.platform_visibility.value': {
                inq: [
                  'Any',
                  'ASSOS-APP'
                ]
              }
            }
          ]
        }
      };
      const res = await this.get(`/V1/catalog/products?filter=${JSON.stringify(filter)}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);

    }

    fetchProductChilds = async (childs: number[]) => {
      const filter = {
        where: {
          and: [
            {
              _id: {
                inq: childs
              }
            },
            {
              'attributes.platform_visibility.value': {
                inq: [
                  'Any',
                  'ASSOS-APP'
                ]
              }
            }
          ]
        }
      };

      const res = await this.get(`/V1/catalog/products?filter=${JSON.stringify(filter)}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    fetchProductsCount = async (): Promise<{count: number}> => {
      const res = await this.get(`/V1/catalog/products/count`);
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    fetchProductById =
    async (id: string | number): Promise<ProductControllersTypes.Product> => {
      const res = await this.get(`/V1/catalog/products/${id}`, {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        const normalized = await normalizeProduct(res.data);
        return normalized;
      }
      throw Error(res.data);
    }

  };

};
