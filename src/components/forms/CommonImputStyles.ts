import { font, fontFamily, lightMode as palette } from '@assos/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconStyles: {
    width: 25,
    height: 25
  },
  iconWrapperStyle: {
    marginRight: 10
  },
  showWrapperStyle: {
    marginRight: 10
  },
  innerCTA: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 12,
    color: palette.textPrimaryLM,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  showText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 15
  },
  inputTitle: {
    fontWeight: '400',
    lineHeight: 14,
    fontSize: 13,
    letterSpacing: 0.5,
    textTransform: 'capitalize'
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  errorIcon: {
    marginRight: 5,
    height: 13,
    width: 12
  },
  errorText: {
    fontFamily: font.maisonNeueRegular,
    lineHeight: 13,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '600',
    color: palette.textError
  },
  passwordContainer: {
    marginBottom: 25
  },
  textInputStyles: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 17,
    color: palette.textPrimaryLM,
    paddingTop: 10
  },
  innerContainer: {
    position: 'absolute',
    right: 0,
    height: 55
  }
});

export default styles;
