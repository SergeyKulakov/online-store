import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import styles from './SizeOptions.styles';
import { i18n, keys } from '@assos/lib';
import { ProductContext } from '../PDPComponent';
import SizeGuide from '../SizeGuide/SizeGuide';
import { PDPGhost } from '../PDPGhost/PDPGhost';

interface SizeOptionsProps {
  variants: ProductControllersTypes.Product[];
  onPress: (variant: ProductControllersTypes.Product) => void;
  activeVariant: ProductControllersTypes.Product | undefined;
}

export interface OptionButtonProps {
  variant: ProductControllersTypes.Product;
  onPress: (variant: ProductControllersTypes.Product) => void;
  activeVariantId?: string;
}

export const OptionButton = ({
  variant,
  onPress,
  activeVariantId
}: OptionButtonProps) => {
  const selectVariant = () => onPress(variant);
  const isOutOfStock = !variant.inventory.in_stock;
  const isActive = variant._id === activeVariantId;
  return (
    <TouchableOpacity
      style={[styles.sizeCta, isOutOfStock ? styles.oosCta : null]}
      onPress={selectVariant}
    >
      <View style={[styles.ctaInner, isActive ? styles.activeInner : null]}>
        {isOutOfStock ? <View style={styles.lineThrough} /> : null}
        <Text
          style={[
            styles.sizeOptionText,
            isActive ? styles.activeText : isOutOfStock ? styles.oosText : null
          ]}
        >
          {variant.attributes.size.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const SizeOptions = (props: SizeOptionsProps) => {
  const product = useContext(ProductContext);

  if (product) {
    return (
      <>
        <View style={styles.attributeRow}>
          <View style={styles.row}>
            <Text style={styles.attibuteTitleText}>
              {i18n.string(keys.pdp.size)}
            </Text>
            <Text style={styles.attributeValueText}>
              {props.activeVariant?.attributes.size.value}
            </Text>
          </View>
          <View style={styles.sizeChartContainer}>
            <SizeGuide product={product} />
          </View>
        </View>
        <View style={styles.sizesContainer}>
          {props.variants.map(v => (
            <OptionButton
              key={v.attributes.size.key}
              activeVariantId={props.activeVariant?._id}
              variant={v}
              onPress={props.onPress}
            />
          ))}
        </View>
      </>
    );
  } else {
    return <PDPGhost />;
  }
};
