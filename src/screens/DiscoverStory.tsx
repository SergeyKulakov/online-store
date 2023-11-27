import React from 'react';
import { makeScreen, useRouteData, useRouteParams } from '@brandingbrand/fsapp';
import {EngagementJSON } from '@brandingbrand/fsengagement';
import { ScreenWrapper } from '@assos/components';
import { EngagementComp } from '../lib/engagement';

export const DiscoverStory = makeScreen(() => {
  const { json, backButton, name, discoverPath } = useRouteData();
  const { id } = useRouteParams();
  return (
    <ScreenWrapper needInSafeArea={true} scroll={false}>
      <EngagementComp
        isLoading={false}
        json={json as EngagementJSON}
        backButton={backButton as boolean}
        name={name as string}
        id={id as string}
        discoverPath={discoverPath as string}
      />
    </ScreenWrapper>
  );
});
