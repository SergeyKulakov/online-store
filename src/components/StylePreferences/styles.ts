import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: palette.systemBackgroundPopover,
    justifyContent: 'space-between'
  },
  container: {
    paddingVertical: 40,
    marginHorizontal: 15,
    flex: 1,
    justifyContent: 'flex-start'
  },
  cardTitle: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  preferenceSwitchRow: {
    flexDirection: 'row',
    height: 58,
    alignItems: 'center',
    paddingHorizontal: 21,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },
  preferenceSwitchText: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '600',
    color: palette.textPrimary,
    marginLeft: 22
  },
  preferenceTitleRow: {
    flexDirection: 'row',
    height: 57,
    paddingLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },
  preferenceCardContainer: {
    flexShrink: 1,
    backgroundColor: palette.systemBackgroundPrimary
  }
});
