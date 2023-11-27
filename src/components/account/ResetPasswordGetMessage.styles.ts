import { fontFamily, fonts, lightMode as palette } from '@assos/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  spaceBottom: {
    marginBottom: 18
  },
  messageText: {
    marginVertical: 36,
    marginHorizontal: 12,
    fontFamily: fonts.maisonNeue,
    color: palette.textPrimary,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22
  },
  boldWeight: {
    fontWeight: '600'
  },
  didNotGetContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  didNotGetText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
    marginRight: 5,
    textAlign: 'center'
  },
  resendText: {
    fontWeight: '600'
  },
  emailSendText: {
    fontFamily,
    color: '#36827A',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5
    // lineHeight: 20
  },
  greenCheckmarkIcon: {
    width: 16,
    height: 16,
    marginRight: 10
  },
  spaceBottomMore: {
    marginBottom: 36
  },
  sendBtn: {
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: fonts.maisonNeue,
    fontSize: 18
  }
});

export default styles;
