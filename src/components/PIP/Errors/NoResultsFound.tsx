import CTAButton from '@assos/components/ui/CTAButton';
import {i18n, keys} from '@assos/lib';
import {assetsImages} from '@assos/styles';
import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {ProductContext} from '../Context/ProductProvider';
import styles from './NoResultsFound.styles';

const NoResultsFound = () => {

  const {clearFilters} = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <Image source={assetsImages.errorIcon}/>
      <Text style={styles.text}>
        {i18n.string(keys.pip.filter.noResultsFound)}
      </Text>
      <CTAButton
        handleOnPress={clearFilters}
        style={styles.clearButton}
        text={i18n.string(keys.pip.filter.clearAllFilters)}
      />
    </View>
  );
};

export default NoResultsFound;
