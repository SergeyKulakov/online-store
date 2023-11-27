import React from 'react';
import { Image, View } from 'react-native';
import {ProductControllersTypes} from '@assos/datasources/magento/Products';
import { env } from '@brandingbrand/fsapp';
import styles from './Swatch.styles';

const imageBaseUrl = env.magento.mediaBaseURL;

interface SwatchProps {
  color: ProductControllersTypes.ColorDetails;
  large?: boolean;
}

enum SwatchType {
  SWATCH = 'swatch',
  COLOR = 'color'
}

const Swatch = ({color, large}: SwatchProps) => {
  const {swatch} = color;
  if (swatch.type === SwatchType.SWATCH) {
    return (
      <Image
        style={[styles.swatch, large ? styles.largeSWatch : null]}
        source={{uri: imageBaseUrl + swatch.value}}
      />
    );
  }
  if (swatch.type === SwatchType.COLOR) {
    return (
      <View
        style={[styles.swatch, large ? styles.largeSWatch : null, {backgroundColor: swatch.value}]}
      />
    );
  }
  return null;
};


export default Swatch;

