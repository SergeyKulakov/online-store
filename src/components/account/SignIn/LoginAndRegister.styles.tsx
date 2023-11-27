import { Dimensions, StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';

const { width: screenWidth } = Dimensions.get('window');


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: screenWidth
  },
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 20,
    marginBottom: 100,
    marginTop: 'auto'
  },
  greeting: {
    marginTop: 30,
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    textAlign: 'center',
    color: palette.textNotification,
    width: '100%'
  },
  logo: {
    marginTop: 70
  },
  ctaButton: {
    width: '100%',
    borderRadius: 0,
    marginTop: 35
  },
  ctaCreateAccount: {
    marginTop: 14,
    backgroundColor: 'transparent',
    borderColor: palette.borderLight,
    borderWidth: 2
  },
  ctaBtnText: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1
  },
  registerBtnText: {
    lineHeight: 26,
    letterSpacing: 0.5,
    color: palette.buttonSecondary
  }
});

export default styles;
