import React from 'react';
import { makeScreen, useNavigator, useRouteData } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import AccountSettingsWebView from '@assos/components/Settings/AccountSettingsWebView';
import { isIos } from '@assos/helpers';
import { Header } from '@assos/components/ui/Header';

export const AccountWebViewScreen = makeScreen(() => {
  const navigator = useNavigator();
  const handleBack = () => navigator.pop();
  const { title } = useRouteData() as {title: string};

  return (
    <ScreenWrapper >
      {isIos &&
        (
          <Header
            backAction={handleBack}
            title={title}
          />
        )
      }
      <AccountSettingsWebView />
    </ScreenWrapper>
  );
},
  { statusBar: { style: 'light' } }
);
