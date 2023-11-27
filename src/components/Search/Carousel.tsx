import React, { FC, useCallback } from 'react';
import { FlatList } from 'react-native';

import { PIPItem } from '../PIP/Item/PIPItem';

import { keyExtractor } from '@assos/helpers/list';
import { SearchCarouselProps } from '@assos/components/Search/types';
import { GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

import {searchStyles as styles } from './styles';


export const SearchCarousel: FC<SearchCarouselProps> = ({ data, onEndReached}) => {

  const renderItem = useCallback((item: GridRenderItemInfo<ProductControllersTypes.Product>) => {
    return (
      <PIPItem
        lengthSwatches={4}
        imageStyle={styles.image}
        containerStyle={styles.carouselItemWrapper}
        {...item}
      />
    );
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      scrollEnabled={true}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      onEndReached={onEndReached}
    />
  );
};

