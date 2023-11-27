import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

/** components */
import { modalFullScreen } from '@assos/modals/helpers';
import { ModalHeader } from '@assos/components/ModalHeader';
import { PinchToZoomCarousel } from '@assos/components/PDP/PDPCarousel/PinchToZoomCarousel';


/** misc */
import { makeModal } from '@brandingbrand/fsapp';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';


const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    height: 80,
    zIndex: 1,
    paddingTop: 73,
    paddingHorizontal: 21
  }
});


export const ImageCarousel = makeModal<void, { product: ProductControllersTypes.Product}>(
  ({ resolve, reject, ...props }) => {
    const [fullScreen, setIsFullScreen] = useState<boolean>(false);

    const setFullScreen = () => {
      setIsFullScreen(prev => !prev);
    };

    return (
       <SafeAreaView >
         <ModalHeader style={styles.header} close={reject}/>
         <PinchToZoomCarousel
           setFullScreen={setFullScreen}
           fullScreen={fullScreen}
           product={props.product}
         />
       </SafeAreaView>
    );
  },
  { ...modalFullScreen }
);

