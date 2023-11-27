import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';


export const styles = StyleSheet.create({
  containerBackground: {
    height: '100%',
    width: '100%'
  },
  container: {
    paddingVertical: 40,
    marginHorizontal: 15,
    flex: 1
  },
  greeting: {
    fontFamily: font.orbitronRegular,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1
  },
  pleaseSelect: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textNotification,
    textAlign: 'center'
  },
  nextBtnText: {
    textDecorationLine: 'none',
    color: palette.textPrimary
  },
  skipBtnText: {
    textTransform: 'uppercase',
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    color: palette.textNotification
  },
  nextBtn: {
    borderRadius: 0,
    marginTop: 108,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  continueBtn: {
    marginTop: 60
  },
  cardTitle: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginHorizontal: 4
  },
  lightText: {
    color: palette.textBanner
  },
  greetingContainer: {
    paddingBottom: '30%'
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  alignCenter: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  marginBottom90: {
    marginBottom: 90
  },
  preferenceContainer: {
    backgroundColor: palette.systemBackgroundPrimary,
    justifyContent: 'space-between',
    minHeight: '60%',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  preferenceSwitchRow: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 21,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },
  preferenceSwitchText: {
    fontSize: 16,
    fontFamily: font.maisonNeueRegular,
    fontWeight: '600',
    color: palette.textPrimary,
    marginLeft: 22
  },
  preferenceTitleRow: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },
  preferenceCardContainer: {
    flexShrink: 1
  },
  preferenceCardBody: {
    padding: 15
  },
  preferenceInstructionWrapper: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  preferenceInstructionText: {
    fontFamily: font.maisonNeueRegular,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: palette.textPrimary
  },
  indicatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19
  },
  indicatorInactive: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: palette.iconInactive,
    marginHorizontal: 5
  },
  indicatorActive: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: palette.textPrimary,
    marginHorizontal: 5
  },
  notificationTitle: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 30
  },
  notificationImage: {
    marginVertical: 34
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  notificationBody: {
    alignItems: 'center'
  },
  flexEnd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    width: '100%'
  },
  greetingCtaContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)'
  }
});
