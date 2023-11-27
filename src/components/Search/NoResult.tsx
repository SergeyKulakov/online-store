import React from 'react';
import { Text, View } from 'react-native';

import { i18n, keys } from '@assos/lib';
import {searchStyles as styles } from './styles';


export const NoResult = () => {
  return (
    <View>
      <View style={styles.noResultContainer}>
        <Text style={styles.noResultTitle} >{i18n.string(keys.search.noResult)}</Text>
        <Text style={styles.noResultSubTitle}>{i18n.string(keys.search.returnedNoResult)}</Text>
      </View>
    </View>
  );
};
