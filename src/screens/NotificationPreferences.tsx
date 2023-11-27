import React from 'react';
import { makeScreen, useNavigator } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import NotificationPreferencesComponent from '@assos/components/NotificationPreferences';
import { isIos } from '@assos/helpers';
import { Header } from '@assos/components/ui/Header';
import { i18n, keys } from '@assos/lib';

export const NotificationPreferences = makeScreen(() => {
  const navigator = useNavigator();
  const handleBack = () => navigator.pop();

  return (
    <ScreenWrapper >
      {isIos &&
        (
          <Header
            backAction={handleBack}
            title={i18n.string(keys.account.settings.notificationPreferences)}
          />
        )
      }
      <NotificationPreferencesComponent />
    </ScreenWrapper>
  );
},
  { statusBar: { style: 'light' } }
);
