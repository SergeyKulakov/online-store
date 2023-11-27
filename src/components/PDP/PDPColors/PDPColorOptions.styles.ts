import {StyleSheet} from 'react-native';
import { font } from '@assos/styles';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
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
  }
});

export default styles;
