import React from 'react';
import { ScreenFC } from '@brandingbrand/fsapp';
import { AccountComponent } from '../components/AccountComponent';
import { ScreenWrapper } from '@assos/components';

export const Account: ScreenFC = () => {
  return (
    <ScreenWrapper hideWebFooter={true} hideWebHeader={true} >
      <AccountComponent />
    </ScreenWrapper>
  );
};
