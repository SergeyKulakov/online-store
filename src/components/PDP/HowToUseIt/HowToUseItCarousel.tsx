import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { font } from '@assos/styles';
import { GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { PIPItem } from '@assos/components/PIP/Item';
import { i18n, keys } from '@assos/lib';

const styles = StyleSheet.create({
  image: {
    height: 276
  },
  carouselItemWrapper: {
    marginRight: 20
  },
  container: {
    marginHorizontal: 20,
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21
  },
  carouselHeaderTitle: {
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  }
});

interface HowToUseItCarouselProps {
  data: ProductControllersTypes.Product[];
}

const HowToUseItCarousel = ({ data }: HowToUseItCarouselProps) => {
  const renderItem = useCallback(
    (item: GridRenderItemInfo<ProductControllersTypes.Product>) => {
      return (
        <PIPItem
          lengthSwatches={4}
          imageStyle={styles.image}
          containerStyle={styles.carouselItemWrapper}
          {...item}
        />
      );
    },
    []
  );

  const keyExtractor = (item: ProductControllersTypes.Product) => item._id;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.carouselHeaderTitle}>
          {i18n.string(keys.pdp.howWhenToUse)}
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HowToUseItCarousel;
