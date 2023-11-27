import React, { useCallback } from 'react';
import { PIPItem } from '@assos/components/PIP/Item';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { useNavigator } from '@brandingbrand/fsapp';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from './RecentlyViewedCarousel.styles';
import { i18n, keys } from '@assos/lib';

interface RecentlyViewedCarouselProps {
  data?: ProductControllersTypes.Product[];
  title?: string;
}

export const RecentlyViewedCarousel: React.FC<RecentlyViewedCarouselProps> = ({
  data, title
}) => {
  const navigator = useNavigator();

  const handleViewAll = () => {
    navigator.open('/shop/pindex/', {
      title: i18n.string(keys.pdp.recentlyViewed),
      isSearch: false
    });
  };

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
      {!!data?.length && (
        <View style={styles.headerContainer}>
        {title ? (
          <Text style={styles.carouselHeaderTitle}>{title}</Text>
        ) : (
          <Text style={styles.carouselHeaderTitle}>
            {i18n.string(keys.pdp.recentlyViewed)}
          </Text>
        )}
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAll}>
            {i18n.string(keys.wishlist.viewAll)}
          </Text>
        </TouchableOpacity>
      </View>
      )}
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
