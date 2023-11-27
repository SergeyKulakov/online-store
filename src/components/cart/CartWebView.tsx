import React, {FC, useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import withStoreFrontHost, {StoreFrontHostProps} from '../HOC/withStoreFrontHost';
import {Navigation} from 'react-native-navigation';

const CartWebView: FC<StoreFrontHostProps> = props => {

  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    Navigation.events().registerComponentDidAppearListener(
    ({componentName}) => {
      if (componentName === '/cart') {
        setRefresh(refresh + 1);
      }
    });
  });

  return (
    <WebView
      key={refresh}
      source={{
        uri: props.host + '/cart/?source=APP'
      }}
      userAgent={'ASSOS-APP'}
      startInLoadingState
      sharedCookiesEnabled
      thirdPartyCookiesEnabled
      pullToRefreshEnabled
    />
  );
};


export default withStoreFrontHost(CartWebView);
