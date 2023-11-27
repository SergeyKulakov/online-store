import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { magento } from '@assos/datasources';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { parseDecimal } from '@assos/helpers';
import { i18n, keys } from '@assos/lib';
import { env } from '@brandingbrand/fsapp';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import createSizeArray from '../Helpers/createSizeArray';
import styles from './AddToBag.styles';
import {useSelector} from 'react-redux';
import {getPrimaryCurrency} from '@assos/state/config/selectors';
interface AddToBagProps {
  item: ProductControllersTypes.Product;
  handleClose(): void;
}

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const AddToBag: FC<AddToBagProps> = ({ item, handleClose }) => {
  const [added, setAdded] = useState(false);
  const currency = useSelector(getPrimaryCurrency);
  const sizes = useMemo(() => {
    const productSizes = item.variants.find(v => v.attribute_code === 'size');
    if (!productSizes) {
      return [];
    }
    return createSizeArray({
      key: productSizes.options.map(o => o.toString()),
      value: productSizes.values.map(v => v.label)
    });
  }, []);
  const [selectedSize, setSelectedSize] = useState<{
    key: string;
    value: string;
  }>();

  useEffect(() => console.log('AddToBag', {SCREEN_WIDTH, SCREEN_HEIGHT}), []);

  const price = item.pricing.final_price;

  const handleSelectSize = (size: { key: string; value: string }) => {
    setAdded(false);
    return setSelectedSize(size);
  };

  const handleAddToBag = () => {
    const sku = item.sku;

    if (selectedSize) {
      magento
        .addItemToCart(sku, 1, selectedSize.key)
        .then(() => {
          handleClose();
        })
        .catch();
    }
  };
  const uri = `${env.magento.mediaBaseURL}/${item.assets.placeholders.small_image}`;

  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      <Image
        resizeMode={'contain'}
        source={{ uri }}
        style={[
          styles.productImage,
          {height: styles.productImage.height * (SCREEN_WIDTH < 400 ? 0.75 : 1) }
        ]}
      />
      <Text style={styles.price}>{`${currency} ${parseDecimal(price)}`}</Text>
      <View style={styles.sizesContainer}>
        {sizes.length ? sizes.map(size => (
          <TouchableOpacity
            style={[
              styles.sizeItem,
              size === selectedSize && styles.sizeItemSelected
            ]}
            key={size.key}
            // tslint:disable-next-line: jsx-no-lambda
            onPress={() => handleSelectSize(size)}
          >
            <Text
              style={[
                styles.sizeItemText,
                size === selectedSize && styles.sizeItemTextSelected
              ]}
            >
              {size.value}
            </Text>
          </TouchableOpacity>
        )) : (
          <View style={{height: 125, width: '100%', backgroundColor: 'orange'}} />
        )}
      </View>
      <CTAButton
        type={CTAButtonTypes.primary}
        text={i18n.string(keys.pdp.addToBag)}
        style={[
          styles.ctaButton,
          (!selectedSize || added) && styles.ctaButtonDisabled
        ]}
        styleText={[
          styles.ctaButtonText,
          !selectedSize && styles.ctaButtonTextDisabled
        ]}
        disabled={!selectedSize || added}
        handleOnPress={handleAddToBag}
      />
    </ScrollView>
  );
};

export default AddToBag;
