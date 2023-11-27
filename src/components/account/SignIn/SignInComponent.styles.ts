import { fontFamily, fonts, lightMode as palette } from '@assos/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  form: {
    width: 335
  },
  forgotTouchContainer: {
    width: '100%',
    marginBottom: 20,
    marginHorizontal: 'auto'
  },
  forgotText: {
    fontFamily: fonts.workSans,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5
  },
  loginBtn: {
    borderRadius: 0,
    marginBottom: 65
  },
  divideLine: {
    height: 1,
    backgroundColor: palette.separatorPrimary,
    width: 139
  },
  loginText: {
    color: palette.textButtonLabelPrimary,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: fonts.maisonNeue,
    fontSize: 18
  },
  errorContainer: {
    flexDirection: 'row',
    width: 335,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    backgroundColor: palette.textError
  },
  errorIcon: {
    marginRight: 5,
    height: 13,
    width: 13
  },
  errorText: {
    flex: 1,
    color: palette.textNotification,
    fontFamily,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5
  }
});

export default styles;
