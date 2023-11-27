import { StyleSheet} from 'react-native';
import { lightMode as palette } from '@assos/styles';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  swatch: {
    height: 24,
    width: 24,
    borderRadius: 15,
    marginRight: 14,
    padding: 1
  },
  plus: {
    color: '#2B2B2B'
  },
  borderForWhiteSwatch: {
    borderColor: palette.bordersPrimary,
    borderWidth: 0.5
  }
});

export default styles;
