import React, {FC, useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import withStoreFrontHost, {StoreFrontHostProps} from '../HOC/withStoreFrontHost';
import {useRouteParams, useRouteQuery} from '@brandingbrand/fsapp';
import {Navigation} from 'react-native-navigation';

const AccountSettingsWebView: FC<StoreFrontHostProps> = props => {

  const [refresh, setRefresh] = useState<number>(0);
  const { route } = useRouteParams();
  const query = useRouteQuery();
  const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

  useEffect(() => {
    Navigation.events().registerComponentDidAppearListener(
    ({componentName}) => {
      if (componentName === '/account/webview/:route') {
        setRefresh(refresh + 1);
      }
    });
  });

  return (
    <WebView
      key={refresh}
      source={{
        uri: props.host + `/${route}/?${queryString}&source=APP`
      }}
      userAgent={'ASSOS-APP'}
      startInLoadingState
      sharedCookiesEnabled
      thirdPartyCookiesEnabled
      pullToRefreshEnabled
    />
  );
};


export default withStoreFrontHost(AccountSettingsWebView);
