import {font} from '@assos/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  botton: {
    marginBottom: 49,
    marginHorizontal: 20
  },
  item: {
    borderBottomColor: '#DBDBDB',
    paddingVertical: 20
  },
  itemTextStyles: {
    textTransform: 'none'
  },
  activeItem: {
    fontWeight: '600'
  },
  headerContainer: {
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1
  },
  headerTitleStyles: {
    fontFamily: font.orbitronRegular
  }

});

export default styles;
