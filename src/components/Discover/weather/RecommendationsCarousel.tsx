import React, { FC, useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PIPItem } from '@assos/components/PIP/Item';
import { keyExtractor } from '@assos/helpers/list';
import { GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { ProductKit } from './RecommendedEquipment';
interface RecommendationsCarouselProps {
  data?: ProductKit[];
}

const styles = StyleSheet.create({
  image: {
    height: 276
  },
  kitWrapper: {
    flexDirection: 'row'
  },
  carouselItemWrapper: {
    marginHorizontal: 20
  },
  kitDivider: {
    height: '100%',
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: 20
  }
});

export const RecommendationsCarousel: FC<RecommendationsCarouselProps> = ({data}) => {
  const renderItem = useCallback((item: GridRenderItemInfo<ProductKit>) => {
    const {item: {products}, ...props} = item;
    return (
      <View style={styles.kitWrapper}>
        {products.map(product => {
          return (
            <PIPItem
              key={product._id}
              lengthSwatches={4}
              containerStyle={styles.carouselItemWrapper}
              imageStyle={styles.image}
              item={product}
              {...props}
            />
          );
        })}
      </View>
    );
  }, []);

  const renderKitSeparator = useCallback(() => {
    return <View style={styles.kitDivider} />;
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      scrollEnabled
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderKitSeparator}
    />
  );
};
