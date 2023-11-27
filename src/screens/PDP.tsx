import React, { useEffect, useState } from 'react';
import { makeScreen, useNavigator, useRouteParams } from '@brandingbrand/fsapp';
import { ScreenWrapper } from '@assos/components';
import PDPComponent from '@assos/components/PDP/PDPComponent';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { assetsImages, lightMode as palette} from '@assos/styles';
import { magento } from '@assos/datasources';


const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.grey,
    flexDirection: 'row',
    height: 96,
    paddingTop: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingBottom: 12,
    alignItems: 'center'
  },
  mediaContainer: {
    resizeMode: 'contain',
    height: 24
  }
});

export const PDP = makeScreen(() => {
  const navigator = useNavigator();
  const {productId} = useRouteParams();
  const [product, setProduct] = useState<ProductControllersTypes.Product>();

  useEffect(() => {
    if (productId && !product) {
      magento.fetchProductById(productId).then(setProduct).catch();
    }
  }, [product, productId]);

  const handlePressBack = () => {
    navigator.pop();
  };

  const handleSearch = () => {
    navigator.open('/shop/search');
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePressBack}>
          <Image
            source={assetsImages.arrowLeft}
            style={styles.mediaContainer}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={assetsImages.search}
            style={styles.mediaContainer}
          />
        </TouchableOpacity>
      </View>
      <PDPComponent product={product} />
    </ScreenWrapper>
  );
});
