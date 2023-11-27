import { StyleSheet } from 'react-native';
import palette from '../../styles/colors';
import { fonts } from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    // paddingTop: 20
  },
  borderRect: {
    color: 'black'
  },
  iconWrapperStyle: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 15,
    top: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconStyles: {
    width: 25,
    height: 25
  },
  messageText: {
    fontFamily: fonts.maisonNeue,
    color: palette.textPrimary,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.5,
    // lineHeight: 22,
    marginVertical: 36
  },
  submitBtn: {
    marginTop: 12
  },
  submitBtn__text: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: fonts.maisonNeue
  }
});

export default styles;
