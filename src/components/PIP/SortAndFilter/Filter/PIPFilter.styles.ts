import {font, lightMode} from '@assos/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 7
  },
  filter: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight: '500',
    color: lightMode.systemBackgroundSecondary,
    marginRight: 7
  },
  number: {
    color: lightMode.systemBackgroundPopover
  }
});

export default styles;
