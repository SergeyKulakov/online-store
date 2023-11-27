import React, { FC, useCallback } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { MultiCarousel } from '@brandingbrand/fscomponents';

/** components */
import { ImageCarousel } from '@assos/modals/ImageCarousel';
import { VideoItemCarousel } from '@assos/components/PDP/PDPCarousel/VideoItemCarousel';

/** misc */
import { env, useModals } from '@brandingbrand/fsapp';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { keyExtractor } from '@assos/helpers/list';

/** style */
import styles from './PDPCarousel.styles';

const imageBaseUrl = env.magento.mediaBaseURL;

const renderImage = (onPress: () => void) => ({ item }: any) => {
  const uri = imageBaseUrl + item.file;
  // Todo remove the check for the imageBaseUrl after adding it to the environment
  if (item.video_url && !!imageBaseUrl) {
    const videoSource = imageBaseUrl + item.video_url.replace('/media', '');
    return <VideoItemCarousel videoSource={videoSource} key={item.title} />;
  }
  return (
    <View key={item.file} style={styles.carouselItem}>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode={'contain'}
          source={{ uri }}
          style={styles.carouselImage}
        />
      </TouchableOpacity>
    </View>
  );
};

interface PDPCarouselProps {
  product: ProductControllersTypes.Product;
  activeColor?: ProductControllersTypes.ColorDetails;
}

export const PDPCarousel: FC<PDPCarouselProps> =
  ({product, activeColor}) => {
    const modals = useModals();

    const showModal = useCallback(async () => {
      return modals?.showModal(ImageCarousel, { product });
    }, [modals]);


    const images = React.useMemo(() => {
      const images = activeColor?.assets?.images || product.assets.images;
      const values = Object.values(images) as ProductControllersTypes.ProductImage[];
      return values.filter(i => !i?.hide_from_gallery);
    }, [product, activeColor]);


    return (
      <MultiCarousel
        keyExtractor={keyExtractor}
        dotActiveStyle={styles.activeDot}
        dotStyle={styles.dot}
        data={images}
        renderItem={renderImage(showModal)}
        itemsPerPage={1}
      />
    );
  };
