import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  ctaText: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1
  },
  ctaEnable: {
    color: palette.textButtonLabelPrimary
  },
  ctaDisable: {
    color: palette.textButtonLabelSecondary
  },
  describeText: {
    color: palette.textPrimaryLM,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 41,
    marginHorizontal: 10
  }
});
