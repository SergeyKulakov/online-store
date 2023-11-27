import {font, lightMode} from '@assos/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  sortBy: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: lightMode.systemBackgroundSecondary
  },
  relevance: {
    fontFamily: font.maisonNeueRegular,
    fontSize: 15,
    letterSpacing: 0.5,
    fontWeight: '500',
    color: lightMode.systemBackgroundSecondary
  }
});

export default styles;
