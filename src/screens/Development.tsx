import React, { useCallback, useMemo } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';
import { Route, Routes, ScreenFC, useApp } from '@brandingbrand/fsapp';

// TODO: Param support
const extractRoutes = (routes?: Routes, prefix: string = ''): string[] => {
  return (
    routes
    ?.filter((route): route is Route => 'path' in route)
      ?.filter(({ path }) => !path || !path.includes(':'))
      ?.reduce<string[]>(
        (prev, route) => [
          ...prev,
          ...('component' in route || 'loadComponent' in route || 'children' in route
            ? [
              `${prefix}/${route.path ?? ''}`,
              ...('children' in route
                  ? extractRoutes(route.children, `${prefix}/${route.path ?? ''}`)
                  : [])
            ]
            : [])
        ],
        []
      ) ?? []
  );
};

export const Development: ScreenFC = () => {
  const app = useApp();
  const routes = useMemo(() => Array.from(new Set(extractRoutes(app?.routes))), []);

  const goTo = useCallback(
    (path: string | undefined) => () => {
      app?.openUrl(`/${path ?? ''}`);
    },
    [navigator]
  );
  const useItemKey = useCallback((item: string): string => item, []);
  const renderItem: ListRenderItem<string | undefined> = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={goTo(item)}
        style={{ marginVertical: 10 }}
      >
        <Text>{`Go to ${item || index}`}</Text>
      </TouchableOpacity>
    ),
    [goTo]
  );

  return (
    <FlatList
      style={{ margin: 10 }}
      data={routes}
      renderItem={renderItem}
      keyExtractor={useItemKey}
    />
  );
};
