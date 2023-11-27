import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 41,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    flexDirection: 'row'
  },
  text: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: 0.5
  },
  close: {
    marginRight: 7,
    height: 9,
    width: 9
  },
  carousel: {
    paddingVertical: 20,
    borderTopColor: '#DBDBDB',
    borderTopWidth: 1
  }
});

export default styles;
