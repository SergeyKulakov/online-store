import { fontFamily, lightMode as palette } from '@assos/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  itemContainer: {
    paddingBottom: 24,
    borderBottomColor: palette.separatorPrimary,
    borderBottomWidth: 1
  },
  itemTitle: {
    fontFamily,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimaryLM,
    flexGrow: 1,
    marginBottom: 16
  },
  itemDetailsContainer: {
    flexDirection: 'row'
  },
  itemImage: {
    marginRight: 20,
    width: 130,
    height: 160
  },
  itemDetails: {
    flexGrow: 0,
    paddingTop: 16
  },
  itemColorContainer: {
    flexDirection: 'row',
    marginBottom: 2
  },
  itemLabel: {
    fontFamily: 'Work Sans',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: palette.textPrimary
  },
  itemDetail: {
    fontFamily,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: palette.textPrimary
  },
  itemOutOfStockIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  itemOutOfStockText: {
    fontFamily,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: palette.textError
  },
  formRequiredSymbol: {
    fontFamily,
    color: palette.textPrimary,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: 0.5,
    textTransform: 'capitalize'
  },
  formSubmitText: {
    color: palette.buttonSecondary,
    fontFamily,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  removeAlertText: {
    color: palette.textPrimaryLM,
    fontFamily,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});

export default styles;
