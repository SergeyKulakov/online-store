import { AppStore } from '../index';


export const getCategories = (state: AppStore) => state.categories?.data?.value;

export const getParentCategoryIds = (state: AppStore) =>
  getCategories(state)
    ?.filter(it => it.type === 'group')
    .reduce((acc, curr) => {
      if (curr.object_id === '3') {
        return {
          ...acc,
          MAN: curr.id
        };
      }

      if (curr.object_id === '6') {
        return {
          ...acc,
          WOMAN: curr.id
        };
      }

      return acc;
    }, {} as any);
