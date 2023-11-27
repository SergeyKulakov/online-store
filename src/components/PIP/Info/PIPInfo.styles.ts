import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
    color: palette.textPrimaryLM,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 18
  },
  discount: {
    color: palette.textClearance,
    textDecorationLine: 'line-through',
    fontSize: 15,
    lineHeight: 20,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400'
  },
  price: {
    color: palette.textPrimaryLM,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
});

export default styles;
