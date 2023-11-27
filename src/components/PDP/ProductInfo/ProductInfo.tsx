import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getPrimaryCurrency } from '@assos/state/config/selectors';
import { parseDecimal } from '@assos/helpers';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import styles from './ProductInfo.styles';

const ProductInfo: FC<{product: ProductControllersTypes.Product}> = ({product}) => {
  const currency = useSelector(getPrimaryCurrency);
  return (
    <>
      {product.attributes.product_label.value ? (
        <Text style={styles.label}>
          {product.attributes.product_label.value}
        </Text>
      ) : null}
      <Text style={styles.title}>{product.name}</Text>
      <View style={styles.row}>
        <Text style={styles.currentPrice}>
          {currency} {parseDecimal(product.pricing.final_price)}
        </Text>
        {product.pricing.final_price !== product.pricing.base_price ? (
          <Text style={styles.previousPrice}>
            {currency} {parseDecimal(product.pricing.base_price)}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default ProductInfo;
