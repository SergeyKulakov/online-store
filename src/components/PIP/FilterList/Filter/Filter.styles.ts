import {font} from '@assos/styles';
import {StyleSheet} from 'react-native';

export const S = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: font.maisonNeueRegular,
    letterSpacing: 0.5
  },
  valueButton: {
    height: 40
  },
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  firstLevelItemContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  selectedValueStyle: {
    fontSize: 14,
    marginTop: 3,
    fontFamily: font.maisonNeueRegular,
    color: '#2b2b2b'
  },
  arrow: {
    width: 14,
    height: 14,
    borderColor: '#555',
    borderBottomWidth: 1,
    borderLeftWidth: 1
  },
  arrowBack: {
    transform: [{ rotate: '45deg' }]
  },
  arrowNext: {
    transform: [{ rotate: '-135deg' }]
  },
  arrowContainer: {
    position: 'absolute',
    left: 15
  },
  ctaContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
    marginTop: 50,
    marginBottom: 50,
    zIndex: 1
  },
  floatApplyButton: {
    paddingVertical: 17,
    backgroundColor: '#333132',
    justifyContent: 'center',
    alignItems: 'center'
  },
  floatCancelButton: {
    paddingVertical: 17,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333132',
    marginBottom: 15
  },
  floatApplyButtonText: {
    color: 'white'
  },
  floatCancelButtonText: {
    color: '#333132'
  },
  rightButton: {
    position: 'absolute',
    right: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterHeader: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1
  },
  filterTitle: {
    fontSize: 20
  },
  applyButton: {
    flex: 0.7
  },
  emptyCell: {
    height: 100
  },
  closeButtonImage: {
    height: 16,
    width: 16
  },
  headerContainer: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1
  },
  headerTitleStyles: {
    fontFamily: font.orbitronRegular
  }
});
