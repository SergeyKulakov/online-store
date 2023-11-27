import React from 'react';
import { makeScreen } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import ShopLanding from '@assos/components/Shop/ShopLanding';

export const Shop = makeScreen(({ componentId }) => {
  return (
    <ScreenWrapper needInSafeArea scroll={false}>
      <ShopLanding />
    </ScreenWrapper>
  );
});
