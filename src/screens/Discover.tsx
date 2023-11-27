import React from 'react';
import { makeScreen } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import { DiscoverComponent } from '@assos/components/Discover/DiscoverComponent';
import LogoHeader from '@assos/components/LogoHeader';
import { ScrollView } from 'react-native';

export const Discover = makeScreen(() => {
  return (
    <ScreenWrapper scroll={false}>
      <LogoHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverComponent componentId='discover' />
      </ScrollView>
    </ScreenWrapper>
  );
});
