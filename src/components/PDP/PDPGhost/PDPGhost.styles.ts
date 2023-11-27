import { StyleSheet } from 'react-native';
import { lightMode as palette } from '../../../styles/colors';
import { font } from '@assos/styles';

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10
  },
  dotActiveStyle: {
    backgroundColor: palette.systemBackgroundSecondary
  },
  dotStyle: {
    height: 10,
    width: 10,
    backgroundColor: 'transparent',
    borderColor: palette.systemBackgroundSecondary,
    borderWidth: 1
  },
  ctaBtn: {
    position: 'absolute',
    bottom: 0,
    height: 55,
    width: 335
  },
  infoWrapper: {
    marginHorizontal: 20,
    height: 220
  },
  ctaBtnText: {
    color: palette.textButtonLabelPrimary,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1
  },
  imageWrapper: {
    marginBottom: 15
  }
});

export default styles;
