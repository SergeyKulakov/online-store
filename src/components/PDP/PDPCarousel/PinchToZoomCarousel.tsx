import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MultiCarousel } from '@brandingbrand/fscomponents';

// ** components ** //
import { VideoItemCarousel } from '@assos/components/PDP/PDPCarousel/VideoItemCarousel';
import { PinchableImage } from './PinchableImage';

// ** misc ** //
import { env } from '@brandingbrand/fsapp';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { i18n, keys } from '@assos/lib';
import { keyExtractor } from '@assos/helpers/list';

// ** style ** //
import styles from './PDPCarousel.styles';


const imageBaseUrl = env.magento.mediaBaseURL;

const renderImage = (onPress: () => void, fullScreen?: boolean) => ({ item }: any) => {
  const uri = imageBaseUrl + item.file;

  if (item.video_url) {
    const videoSource = imageBaseUrl + item.video_url.replace('/media', '');
    return (
      <VideoItemCarousel
        style={fullScreen && styles.fullScreen}
        videoStyle={fullScreen && styles.fullScreen}
        videoSource={videoSource}
        key={item.title}
      />
    );
  }
  return (
    <View key={item.file}>
      <TouchableOpacity onPress={onPress}>
          <PinchableImage uri={uri} />
          <Text style={styles.pinchToZoomText}>
            {i18n.string(keys.pdp.pinchToZoom)}
          </Text>
      </TouchableOpacity>
    </View>
  );
};

export const PinchToZoomCarousel: FC<{
  product: ProductControllersTypes.Product;
  setFullScreen: () => void;
  fullScreen: boolean;
}> =
  ({product, setFullScreen, fullScreen}) => {

    const images = React.useMemo(() => {
      const images = product.assets.images;
      const values = Object.values(images) as ProductControllersTypes.ProductImage[];
      return values.filter(i => !i?.hide_from_gallery);
    }, [product]);


    return (
      <MultiCarousel
        style={[
          styles.pinchToZoomWrapper
        ]}
        keyExtractor={keyExtractor}
        dotActiveStyle={styles.activeDot}
        dotStyle={styles.dot}
        data={images}
        renderItem={renderImage(setFullScreen, fullScreen)}
        itemsPerPage={1}
      />
    );
  };
