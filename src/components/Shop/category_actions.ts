import { magento } from '@assos/datasources';
import { MenuTypes } from '@assos/datasources/magento/Menus/menus.type';

export const CATEGORY_ACTIONS = {
  getSubcategories: async (parent: string, allCategories: MenuTypes.Menus.Response[]) => {
    const results: MenuTypes.Menus.Response[] = [];

    allCategories.forEach(({ id, parent_id, name, path, object_id, type }) => {
      if (parent_id === parent) {
        results.push({ id, parent_id, path, name: name?.toUpperCase(), object_id, type });
      }
    });

    return results;
  },
  getCategoryTitleById: (id: string, allCategories: MenuTypes.Menus.Response[]) => {
    return allCategories
      .find(category => category.id === id)
      ?.name?.toUpperCase() as string;
  },
  getParentId: (id: string, allCategories: MenuTypes.Menus.Response[]) => {
    return allCategories.find(category => category.id === id)
      ?.parent_id as string;
  },
  getIdByPath: async (path: string) =>
    (await magento.categories()).find(it => it.path === path)?.id
};
