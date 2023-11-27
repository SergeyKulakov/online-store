import React from 'react';
import { ScreenFC } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import { SearchScreenController } from '@assos/controllers/SearchScreenController';


export const SearchScreen: ScreenFC = () => {
  return (
    <ScreenWrapper hideWebFooter={true} hideWebHeader={true}>
      <SearchScreenController/>
    </ScreenWrapper>
  );
};
