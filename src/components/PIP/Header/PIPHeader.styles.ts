import { StyleSheet } from 'react-native';
import { lightMode as palette } from '../../../styles/colors';
import { font } from '@assos/styles';

export const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingBottom: 24,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    backgroundColor: palette.headerBackgroundPIP
  },
  title: {
    width: 'auto',
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    color: palette.textNotification,
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'uppercase'
  },
  btnWrapper: {
    width: 40,
    alignItems: 'center'
  }
});
