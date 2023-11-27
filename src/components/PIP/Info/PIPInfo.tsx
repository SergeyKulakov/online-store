import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { logError, parseDecimal } from '@assos/helpers';
import React, { FC, useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getPrimaryCurrency } from '@assos/state/config/selectors';
import styles from './PIPInfo.styles';
import { assetsImages, HIT_SLOP } from '@assos/styles';
import { useModals } from '@brandingbrand/fsapp';
import AddToBagModal from '@assos/modals/AddToBagModal';

interface PIPInfoProps {
  item: ProductControllersTypes.Product;
  onTextPress: () => void;
}

const PIPInfo: FC<PIPInfoProps> = ({ item, onTextPress }) => {
  const currency = useSelector(getPrimaryCurrency);
  const modals = useModals();
  const handlePress = useCallback(async () => {
    await modals
      .showModal(AddToBagModal, {
        title: item.attributes.name.value,
        item
      })
      .catch(logError);
  }, [item]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onTextPress}>
        <Text style={styles.title}>{item.attributes.name.value}</Text>
        <Text style={styles.price}>
          {`${currency} `}
          {item.pricing.min_price && parseDecimal(item.pricing.min_price)}
        </Text>
        { item.pricing.min_price < item.pricing.base_price &&
        (
          <Text style={styles.discount}>
            {`${currency} `}
            {item.pricing.base_price && parseDecimal(item.pricing.base_price)}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} hitSlop={HIT_SLOP}>
        <Image style={styles.image} source={assetsImages.bag} />
      </TouchableOpacity>
    </View>
  );
};

export default PIPInfo;
