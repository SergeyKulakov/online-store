import {StyleSheet} from 'react-native';
import { font } from '@assos/styles';

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  wishlistText: {
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 1,
    fontFamily: font.maisonNeueRegular
  },
  wishlistBtn: {
    marginTop: 50
  },
  productDescriptionTitle: {
    fontFamily: font.workSans,
    fontWeight: '500'
  },
  stickyCtaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 14,
    paddingHorizontal: 20,
    width: '100%'
  }
});

export default styles;
