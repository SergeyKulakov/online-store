import React, { FC } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';

import { assetsImages, lightMode as palette} from '@assos/styles';

const styles = StyleSheet.create({
  itemWrapper: {
    width: '100%',
    backgroundColor: palette.systemBackgroundPrimary
  },
  itemImage: {
    alignSelf: 'flex-start',
    resizeMode: 'cover',
    backgroundColor: palette.systemBackgroundPrimary,
    marginBottom: 20
  }
});

interface CarouselCustomerPhotosItem {
  product: CommerceTypes.Product;
  imageWidth?: number;
  imageHeight?: number;
  singleItemWrapper?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const CarouselCustomerPhotosItem: FC<CarouselCustomerPhotosItem> = props => {
  const {
    product,
    singleItemWrapper,
    imageStyle
  } = props;

  const imageSource = product.images?.[0]
    || (product.options?.[0] as any).values?.[0].images?.[0];

  const handlePress = () => {
    // TODO implement logic to press on image
  };

  return (
    <TouchableOpacity
      style={[
        styles.itemWrapper,
        singleItemWrapper
      ]}
      onPress={handlePress}
    >
      <Image
        source={!!imageSource ? imageSource : assetsImages.imagePlaceholder}
        style={[
          styles.itemImage,
          imageStyle
        ]}
      />
    </TouchableOpacity>
  );
};
