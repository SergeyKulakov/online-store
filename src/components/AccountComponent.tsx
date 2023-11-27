import React, { FC, useState } from 'react';
import CustomTopBar from './ui/CustomTopBar';
import { ScrollView } from 'react-native';
import { i18n, keys } from '@assos/lib';
import GuestLanding from './account/GuestLanding';
import { useSelector } from 'react-redux';
import { getUserLoginStatus } from '@assos/state/user';
import AccountWebView from './account/AccountWebView';
import {SettingsComponent} from './Settings/SettingsComponent';
import SettingsTopBar from './Settings/SettingsTopBar';


export const AccountComponent: FC = () => {
  const isLoggedIn = useSelector(getUserLoginStatus);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      {isLoggedIn && !showSettings && (
        <>
          <CustomTopBar title={i18n.string(keys.account.account)} toggleSettings={toggleSettings}/>
          <AccountWebView />
        </>
      )}
      {isLoggedIn && showSettings && (
        <>
        <SettingsTopBar toggleSettings={toggleSettings}/>
        <ScrollView >
          <SettingsComponent />
        </ScrollView>
        </>
      )}
      {isLoggedIn ? null : (
        <GuestLanding />
      )}
    </>
  );
};
