import { StyleSheet } from 'react-native';
import { fontFamily, lightMode as palette } from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary
  }
});

export default styles;
