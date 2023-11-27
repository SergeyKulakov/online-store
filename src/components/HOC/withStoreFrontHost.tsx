import { noop } from 'lodash-es';
import {ActivityIndicator, View} from 'react-native';
import React, {ComponentType, useEffect, useState} from 'react';

import {env} from '@brandingbrand/fsapp';
import { AsyncStorageKeys, getStorageValue } from '@assos/lib';

import styles from './withStoreFrontHost.styles';

export interface StoreFrontHostProps {
  host: string;
}


const withStoreFrontHost =
  (WrapperComponent: ComponentType<StoreFrontHostProps>) => {
    return <P, >(props: P) => {

      const [uri, setUri] = useState('');

      useEffect(() => {
        getStorageValue(AsyncStorageKeys.Store).then(res => {
          setUri(`${env.magento.webBaseURL}/${res}`);
        }).catch(noop);
      }, []);

      if (!uri) {
        return (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator/>
          </View>
        );
      }

      return (
        <WrapperComponent host={uri} {...props}/>
      );
    };
  };

export default withStoreFrontHost;
