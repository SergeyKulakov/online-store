import {StyleSheet} from 'react-native';
import { font } from '@assos/styles';

const styles = StyleSheet.create({
  sectionRow: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  sectionIcon: {
    marginRight: 20
  },
  sectionText: {
    fontFamily: font.maisonNeueRegular,
    fontWeight: '600',
    fontSize: 14
  },
  plusIconWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default styles;
