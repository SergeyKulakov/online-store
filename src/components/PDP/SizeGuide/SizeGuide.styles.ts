import { fonts } from '@assos/styles';
import { StyleSheet } from 'react-native';
// tslint:disable-next-line: no-duplicate-imports
import { font, lightMode as palette } from '@assos/styles';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 12
  },
  footer: {
    fontFamily: fonts.maisonNeue,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 20,
    alignContent: 'center',
    textAlign: 'center',
    marginVertical: 12,
    marginBottom: 28,
    color: '#565656'
  },
  footerConfirm: {
    fontSize: 10,
    marginVertical: 18,
    marginBottom: 24
  },
  header__text: {
    fontFamily: fonts.maisonNeue,
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 6
  },
  flex: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center'
  },
  toggleButton: {
    flexDirection: 'row',
    paddingLeft: 12,
    alignItems: 'center',
    marginTop: 12
  },
  toggleOption: { fontSize: 18, color: '#999', letterSpacing: 1 },
  toggleOptionActive: {
    color: '#000'
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    maxWidth: 250,
    alignItems: 'center'
  },
  userInput: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    fontFamily: fonts.maisonNeue,
    padding: 18
  },
  inputContainer__feet: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    // height: 55,
    alignItems: 'center',
    marginRight: 12
  },
  userInput__title: {
    color: '#999',
    fontSize: 17,
    fontWeight: '500',
    paddingRight: 20,
    width: 90
  },
  userInput__label: {
    color: '#999',
    fontSize: 17,
    fontWeight: '500',
    paddingRight: 20
  },
  toggleButtonWrapper: {
    paddingHorizontal: 10
  },
  toggleButtonContainer: {
    height: 31,
    width: 50
  },
  recommendedSizeVisualizationImage: {
    height: 241,
    width: '100%',
    resizeMode: 'contain'
  },
  recommendedSizeText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 30
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '50%'
  },
  startOverText: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 24
  },
  sizeOptionText: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 14,
    color: palette.preferredText
  },
  oosText: {
    color: palette.textOos
  },
  sizeCta: {
    borderWidth: 2,
    borderColor: palette.bordersPrimary,
    borderRadius: 100,
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  oosCta: {
    borderColor: palette.textOos
  },
  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attibuteTitleText: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 12
  },
  attributeValueText: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 15,
    fontWeight: '500'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sizeChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  sizeChartText: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 12,
    color: palette.textPrimary,
    textDecorationLine: 'underline'
  },
  sizeChartIcon: {
    height: 11,
    width: 18,
    marginRight: 4,
    resizeMode: 'contain'
  },
  lineThrough: {
    height: 2,
    width: '100%',
    backgroundColor: palette.textOos,
    position: 'absolute',
    alignSelf: 'center',
    transform: [{ rotate: '-45deg' }]
  },
  ctaInner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: palette.systemBackgroundPrimary
  },
  activeInner: {
    backgroundColor: palette.textPrimary
  },
  activeText: {
    color: palette.textButtonLabelPrimary
  },
  sizeChartCTA: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sizeChartCTAText: {
    textDecorationLine: 'underline',
    fontSize: 12
  },
  sizeChartCTAIcon: {
    height: 12,
    resizeMode: 'contain',
    marginRight: 6
  },
  stepperRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19
  },
  stepperInactive: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: palette.iconInactive,
    marginHorizontal: 5
  },
  stepperActive: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: palette.textPrimary,
    marginHorizontal: 5
  }
});
