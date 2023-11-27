import React from 'react';
import { makeScreen, useRouteData } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import PIP from '@assos/components/PIP/PIP';
import ProductProvider, { optionsMap } from '@assos/components/PIP/Context/ProductProvider';

export const ProductIndex = makeScreen(
  ({ componentId }) => {
    const data = useRouteData() as {
      title: string;
      id?: string;
      isSearch: boolean;
      searchTerm?: string;
      selection: keyof typeof optionsMap;
      setSelection: (s: string) => void;
    };

    return (
      <ScreenWrapper scroll={false}>
        <ProductProvider
          selection={data.selection}
          setSelection={data.setSelection}
          isSearch={data.isSearch}
          searchTerm={data.title}
          category={data.id}
        >
          <PIP />
        </ProductProvider>
      </ScreenWrapper>
    );
  },
  {
    statusBar: { style: 'light' }
  }
);
