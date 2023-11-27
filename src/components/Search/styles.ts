import { StyleSheet } from 'react-native';
import { font, lightMode as palette } from '@assos/styles';

export const searchStyles = StyleSheet.create({
  // ** SCREEN ** //
  searchResultsScrollView: {
    marginHorizontal: 20,
    flex: 1
  },
  item: {
    paddingTop: 25,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  clearButtonWrap: {
    backgroundColor: palette.systemBackgroundSecondary,
    borderRadius: 100,
    paddingVertical: 6,
    width: 82
  },
  clearButton: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    textAlign: 'center'
  },
  recentTitle: {
    fontWeight: '500',
    fontSize: 23,
    lineHeight: 27,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  recentTitleWrap: {
    paddingVertical: 15,
    paddingHorizontal: 0
  },
  itemSubtitle: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.5,
    color: palette.textSecondary
  },

  // ** CAROUSEL ** //

  image: {
    height: 276
  },
  carouselIcon: {
    position: 'absolute',
    right: 14,
    top: 11,
    zIndex: 10
  },
  carouselItemWrapper: {
    marginRight: 20
  },
  colorSwatches: {
    height: 24,
    width: 24
  },
  productTitle: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginTop: 16
  },

  // ** SEARCH_BAR ** //

  searchBarContainer: {
    borderBottomWidth: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center'
  },
  searchIcon: {
    position: 'absolute',
    left: -10,
    opacity: 1,
    width: 16,
    height: 16
  },
  cancelContainer: {
    marginRight: 25,
    alignItems: 'center'
  },
  cancelImageBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: -1
  },
  cancelImage: {
    width: 20,
    height: 16
  },
  searchBarInputContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  searchBarInputText: {
    alignItems: 'center',
    height: 38,
    paddingLeft: 27,
    paddingTop: 4,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: palette.separatorSecondary,
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: 0.5,
    fontWeight: '600',
    fontFamily: font.maisonNeueRegular,
    color: palette.textPrimaryLM,
    paddingBottom: -10
  },
  searchBarClearIconWrapper: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  searchBarClearIcon: {
    width: 20,
    height: 20
  },
  rightIcon: {
    width: 25
  },

  // ** NO RESULTS ** //

  noResultContainer: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  noResultTitle: {
    fontWeight: '500',
    fontFamily: font.orbitronRegular,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  noResultSubTitle: {
    marginTop: 10,
    fontWeight: '400',
    fontFamily: font.maisonNeueRegular,
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  popularSearchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 20
  },
  popularSearch: {
    backgroundColor: palette.buttonTertiary,
    borderWidth: 0,
    alignSelf: 'flex-start',
    height: 37,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 12
  },
  popularSearchText: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  popularSearchTerms: {
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 18
  }
});
