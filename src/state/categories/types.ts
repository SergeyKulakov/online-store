import { FSNetworkError } from '@brandingbrand/fsnetwork';

import { actionTypeGenerator, APIResult } from '@assos/state/helpers';
import { MenuTypes } from '@assos/datasources/magento/Menus/menus.type';

const categoryActionGenerator = actionTypeGenerator('CATEGORIES');

export const categoryActions = {
  getData: categoryActionGenerator.async('getData')
};

export interface CategoryStore {
  data: APIResult<MenuTypes.Menus.Response[], FSNetworkError>;
}
