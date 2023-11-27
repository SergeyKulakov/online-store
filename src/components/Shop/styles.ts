import { font, lightMode as palette } from '@assos/styles';
import { Dimensions, StyleSheet } from 'react-native';


const height = Dimensions.get('window').height;


export const shopStyles = StyleSheet.create({

  // ** SEARCH_COMPONENT ** //

  categories: {
    fontWeight: '500',
    fontFamily: font.maisonNeueRegular,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.5
  },
  categoriesContainer: {
    marginTop: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    borderBottomColor: palette.separatorSecondary
  },
  tubView: {
    height,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorSecondary,
    marginTop: 40,
    paddingBottom: 40
  },
  footerContainer: {
    marginBottom: 100
  },

  // ** CATEGORY TUB ** //

  tubCategoryWrapper: {
    backgroundColor: palette.systemBackgroundPrimary
  },
  tubCategory: {
    width: 'auto'
  },
  indicator: {
    backgroundColor: palette.iconPrimary
  },

  // ** CATEGORY LINE ** //

  labelContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    paddingRight: 10
  },
  label: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  labelEquipment: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  itemContainer: {
    paddingHorizontal: 20,
    borderBottomColor: palette.separatorPrimary,
    borderBottomWidth: 1,
    height: 80
  },
  button: {
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    flexShrink: 0,
    width: 9,
    height: 16,
    resizeMode: 'contain'
  },

  // ** CATEGORY LIST ** //

  categoryWrapper: {
    flexShrink: 0
  },
  equipmentTitle: {
    fontWeight: '500',
    fontFamily: font.orbitronRegular,
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  equipmentTitleWrapper: {
    marginTop: 60,
    paddingLeft: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorPrimary
  },

  // ** SEARCH BAR ** //

  header: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorSecondary
  },
  title: {
    width: 'auto',
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 18,
    letterSpacing: 0.5,
    color: palette.topBarTextColor,
    marginRight: 'auto'
  },
  btnWrapper: {
    width: 40,
    alignItems: 'center'
  }
});
