import { StyleSheet } from 'react-native';
import { lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  appleSignIn: {
    width: '100%',
    height: 50,
    borderColor: palette.bordersPrimary,
    borderWidth: 1
  },
  altBtnWrapper: {
    marginTop: 20,
    height: 195,
    justifyContent: 'flex-end'
  },
  separator: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divideLine: {
    height: 1,
    backgroundColor: palette.separatorPrimary,
    width: 139
  },
  singInOptionsWrapper: {
    width: '100%'
  },
  verticalAlignment: {
    marginTop: 15
  }
});

export default styles;
