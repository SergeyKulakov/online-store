import {ProductControllersTypes} from '@assos/datasources/magento/Products';
import {i18n, keys} from '@assos/lib';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './PDPColorOptions.styles';
import Swatch from '../Swatch/Swatch';

interface PDPColorOptionsProps {
  product: ProductControllersTypes.Product;
  onPress: (color: ProductControllersTypes.ColorDetails) => void;
  activeColor?: ProductControllersTypes.ColorDetails;
}


const PDPColorOptions: FC<PDPColorOptionsProps> = ({product, onPress, activeColor}) => {
  const swatches = product.colorSwatches;
  const activeColorName = activeColor?.value || product.attributes.color_details.value;
  const handlePress = (swatch: ProductControllersTypes.ColorDetails) => {
    return () => onPress(swatch);
  };
  return (
    <>
      <View style={styles.attributeRow}>
        <View style={styles.row}>
          <Text style={styles.attibuteTitleText}>{i18n.string(keys.pdp.color)}</Text>
          <Text style={styles.attributeValueText}>
            {activeColorName}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        {swatches.map(swatch => (
          <TouchableOpacity key={swatch.key} onPress={handlePress(swatch)}>
            <Swatch color={swatch} large />
          </TouchableOpacity>
        ))}
      </View>
    </>

  );
};

export default PDPColorOptions;
