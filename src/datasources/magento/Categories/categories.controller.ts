import { Constructor } from '../Base/base.type';
import { CategoriesTypes } from './categories.type';

export const CategoriesController = <TBase extends Constructor>(
  Base: TBase
) => {
  return class CategoriesController extends Base {
    categories = async (): Promise<CategoriesTypes.Categories.Response[]> => {
      const res = await this.get('/V1/catalog/categories', {
        headers: await this.magentoHeaders()
      });

      return res.data;
    }
  };
};
