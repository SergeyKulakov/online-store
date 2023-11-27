import React, { FC, useState } from 'react';
import { useNavigator } from '@brandingbrand/fsapp';
import { Price } from '@brandingbrand/fscomponents';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

import ColorSwatches from './ColorSwatches';
import { CarouselItemProps } from './Carousel';
import CustomReviews, { ReviewType } from './CustomReviews';

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
  },
  productName: {
    fontFamily,
    fontSize: 15,
    letterSpacing: 0.5,
    marginBottom: 8,
    lineHeight: 22
  },
  heart: {
    width: 18,
    height: 19,
    resizeMode: 'contain'
  },
  heartWrapper: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 35,
    height: 35,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.systemBackgroundPrimary,
    zIndex: 2
  },
  colorsSwatches: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  colorSeparator: {
    width: 37
  },
  colorWrapper: {
    padding: 2,
    marginHorizontal: 4
  }
});

export const CarouselSingleItem: FC<CarouselItemProps> = (props: CarouselItemProps) => {
  const {
    imageWidth,
    imageHeight,
    singleItemWrapper,
    imageStyle,
    heartButtonStyle,
    heartIconStyle,
    product,
    productNameTextStyle,
    priceTextStyle,
    swatchLimit
  } = props;

  const navigator = useNavigator();
  const [
    activePhoto,
    setColor
  ] = useState(product.images?.[0] || (product.options?.[0] as any).values?.[0].images?.[0]);

  const handlePress = (elem: any) => {
    if (elem.images && elem.images[0]) {
      setColor(elem.images[0]);
    }
  };

  const navigateToPDP = () => {
    navigator.open(`/shop/product/${product.id}`, { title: product.title });
  };

  return (
    <View
      style={[
        styles.itemWrapper,
        singleItemWrapper
      ]}
    >
      <Image
        source={!!activePhoto ? {uri: activePhoto?.uri} : assetsImages.imagePlaceholder}
        style={[
          styles.itemImage,
          imageStyle,
          {height: imageHeight, width: imageWidth}
        ]}
      />
      <TouchableOpacity
        style={[
          styles.heartWrapper,
          heartButtonStyle
        ]}
      >
        <Image
          source={assetsImages.favorite}
          style={[
            styles.heart,
            heartIconStyle
          ]}
        />
      </TouchableOpacity>
      <ColorSwatches
        containerStyle={{width: imageWidth, marginBottom: 30}}
        colorSwatchesWrapperStyle={{width: imageWidth}}
        data={product.options?.[0].values || []}
        colorPress={handlePress}
        onClickPlus={navigateToPDP}
        noSpace={true}
        buttonSizes={styles.colorsSwatches}
        separatorStyle={styles.colorSeparator}
        singleColorWrapper={styles.colorWrapper}
        swatchLimit={swatchLimit}
      />
      <Text
        style={[
          styles.productName,
          productNameTextStyle
        ]}
      >
        {product.title}
      </Text>
      <Text
        style={[
          styles.productName,
          priceTextStyle
        ]}
      >
        <Price
          price={product.price}
        />
      </Text>
      <CustomReviews
        reviews={[]}
        reviewsCount={132}
        reviewsRating={2.5}
        type={ReviewType.title}
      />
    </View>
  );
};
