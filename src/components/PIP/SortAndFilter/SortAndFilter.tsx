import React from 'react';
import {Image, View} from 'react-native';
import PIPSort from './Sort/PIPSort';
import PIPFilter from './Filter/PIPFilter';
import styles from './SortAndFilter.styles';
import {assetsImages} from '@assos/styles';


const SortAndFilter = () => {
  return (
    <View style={styles.container}>
      <PIPSort />
      <Image source={assetsImages.divider} />
      <PIPFilter />
    </View>
  );
};

export default SortAndFilter;
