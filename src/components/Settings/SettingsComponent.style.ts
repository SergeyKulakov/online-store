import { StyleSheet } from 'react-native';
import { lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  menu: {
    flex: 0,
    borderBottomWidth: 0
  },
  menuItem: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  itemList: {
    height: 81
  }
});

export default styles;
