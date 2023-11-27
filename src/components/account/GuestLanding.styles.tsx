import { StyleSheet } from 'react-native';
import { fontFamily, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  menu: {
    flex: 0,
    borderBottomWidth: 0
  },
  menuItem: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    fontFamily
  },
  menuItemSubText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.5,
    color: palette.textSecondary,
    fontFamily
  },
  itemList: {
    height: 81
  }
});

export default styles;
