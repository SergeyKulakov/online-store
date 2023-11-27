import React, { FC, useContext, useRef } from 'react';
import { Grid, GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { PIPItem } from '../Item';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { ProductContext } from '../Context/ProductProvider';
import { FlatList, StyleSheet, View } from 'react-native';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { i18n, keys } from '@assos/lib';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export interface PIPGridProps {
  products: ProductControllersTypes.Product[];
}

const PIPGrid: FC<PIPGridProps> = props => {
  const { loadMoreData } = useContext(ProductContext);
  const ref = useRef<FlatList>(null);

  const renderItem = (
    item: GridRenderItemInfo<ProductControllersTypes.Product>
  ) => {
    return <PIPItem {...item} />;
  };

  const handleOnPress = () => ref.current?.scrollToIndex({ index: 0 });

  return (
    <View style={styles.container}>
      <Grid
        ref={ref}
        data={props.products}
        renderItem={renderItem}
        ListFooterComponent={(
          <CTAButton
            type={CTAButtonTypes.underline}
            text={i18n.string(keys.pip.backToTop)}
            handleOnPress={handleOnPress}
          />
        )}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreData}
      />
    </View>
  );
};

export default PIPGrid;
