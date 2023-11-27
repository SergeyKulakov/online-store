import { fontFamily, lightMode as palette } from '@assos/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    marginTop: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  disabled: {
    backgroundColor: '#00000066',
    borderWidth: 0
  },
  text: {
    color: palette.buttonSecondary,
    fontFamily,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});

export default styles;
