import { StyleSheet } from 'react-native';
import { fontFamily, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20
  },
  productImage: { height: 328, width: 292 },
  price: {
    fontFamily,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.5,
    marginTop: 35
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 13,
    marginBottom: 25,
    flex: 1
  },
  sizeItem: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10
  },
  sizeItemSelected: {
    backgroundColor: palette.buttonPrimary
  },
  sizeItemText: {
    fontFamily,
    fontSize: 14
  },
  sizeItemTextSelected: {
    color: palette.buttonSecondary
  },
  ctaButton: { width: '100%' },
  ctaButtonDisabled: {
    backgroundColor: palette.white,
    borderColor: palette.buttonInactive
  },
  ctaButtonText: {
    color: palette.textButtonLabelPrimary,
    fontFamily,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 1
  },
  ctaButtonTextDisabled: {
    color: palette.buttonInactive
  }
});

export default styles;
