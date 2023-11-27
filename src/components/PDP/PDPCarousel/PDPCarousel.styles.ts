import { StyleSheet } from 'react-native';
import { lightMode as palette} from '@assos/styles';

const styles = StyleSheet.create({
  carouselItem: {
    height: 467,
    marginBottom: 20,
    backgroundColor: palette.grey
  },
  carouselImage: {
    height: '100%'
  },
  dot: {
    height: 6,
    width: 6
  },
  activeDot: {
    height: 8,
    width: 8
  },

  // ** PINCH TO ZOOM ** //

  imagePinchToZoom: {
    height: 500
  },
  fullScreen: {
    height: '100%',
    marginTop: 0
  },
  pinchToZoomWrapper: {
    height: 600,
    marginTop: 100
  },
  pinchToZoomText: {
    zIndex: -1,
    textAlign: 'center'
  }
});

export default styles;
