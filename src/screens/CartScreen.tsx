import React from 'react';
import { ScreenFC } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import CartWebView from '@assos/components/cart/CartWebView';

export const CartScreen: ScreenFC = () => {

  return (
    <ScreenWrapper hideWebFooter={true} hideWebHeader={true} needInSafeArea>
      <CartWebView/>
    </ScreenWrapper>
  );
};
