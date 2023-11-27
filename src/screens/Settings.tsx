import React from 'react';
import { makeScreen } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import { SettingsComponent } from '@assos/components/Settings/SettingsComponent';

export const Settings = makeScreen(
  () => {
    return (
      <ScreenWrapper >
        <SettingsComponent />
      </ScreenWrapper>
    );
  },
  { statusBar: { style: 'light' } }
);
