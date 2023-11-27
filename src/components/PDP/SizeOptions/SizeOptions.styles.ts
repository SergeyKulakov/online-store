import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';


const styles = StyleSheet.create({
  sizesContainer: {
    marginHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 55
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
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginHorizontal: 15
  },
  oosCta: {
    borderColor: palette.textOos
  },
  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 37
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
    transform: [{rotate: '-45deg'}]
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
  }
});

export default styles;
