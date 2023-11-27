import {StyleSheet} from 'react-native';
import { font, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  title: {
    color: palette.iconBanner,
    fontFamily: font.maisonNeueRegular,
    fontSize: 15,
    fontWeight: '400'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  currentPrice: {
    color: palette.iconBanner,
    fontFamily: font.maisonNeueRegular,
    fontSize: 20,
    fontWeight: '400'
  },
  previousPrice: {
    color: palette.textClearance,
    fontFamily: font.maisonNeueRegular,
    textDecorationLine: 'line-through',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '400'
  },
  label: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    fontSize: 12,
    marginBottom: 12
  }
});

export default styles;
