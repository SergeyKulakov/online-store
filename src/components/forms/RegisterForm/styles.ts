import { StyleSheet } from 'react-native';
import colors from '@assos/styles/colors';
import { font, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  validationMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  validationText: {
    fontSize: 12,
    fontFamily: font.maisonNeueRegular
  },
  checkIcon: {
    marginRight: 5
  },
  activeText: {
    color: colors.textSuccess
  },
  faceIdText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: font.maisonNeueRegular,
    lineHeight: 20.18
  },
  passwordContainer: {
    marginBottom: 10
  },
  faceIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26
  },
  passwordWrapperContainer: {
    marginBottom: 35
  },
  btnRegister: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    color: palette.textButtonLabelPrimary,
    textTransform: 'uppercase'
  },
  errorMessage: {
    fontFamily: font.maisonNeueRegular,
    lineHeight: 13,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '600',
    color: palette.textError,
    marginBottom: 13
  },
  CTABtn: {
    marginBottom: 50
  },
  header: {
    borderBottomWidth: 0
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});

export default styles;
