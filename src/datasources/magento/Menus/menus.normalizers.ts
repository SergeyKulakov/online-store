import { AxiosResponse } from '@brandingbrand/fsnetwork';

import { requiredString } from '@assos/lib';

import type { MenuTypes } from './menus.type';

export const menus = (
  res: AxiosResponse<MenuTypes.Menus.RawResponse[]>,
  store: string
): MenuTypes.Menus.Response[] =>
  res.data
    .filter(datum => datum.store === store)
    .filter(datum => datum.type === 'category' || datum.type === 'group')
    .map(datum => ({
      id: requiredString(datum.node_id?.toString()),
      parent_id: requiredString(datum.parent_id?.toString()),
      name: requiredString(datum.title),
      object_id: requiredString(datum.object_id),
      type: requiredString(datum.type),
      path: ''
    }));
