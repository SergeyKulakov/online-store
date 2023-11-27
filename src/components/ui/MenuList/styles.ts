import { StyleSheet } from 'react-native';
import { lightMode as palette } from '@assos/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 2
  },
  itemContainer: {
    paddingHorizontal: 20,
    borderBottomColor: palette.separatorPrimary,
    borderBottomWidth: 1,
    height: 80
  },
  firstItemContainer: {
    borderTopColor: palette.separatorPrimary,
    borderTopWidth: 1
  },
  button: {
    minHeight: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
    paddingRight: 10
  },
  label: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22
  },
  subLabel: {
    fontWeight: '400',
    fontSize: 8,
    lineHeight: 13
  },
  icon: {
    flexShrink: 0,
    width: 9,
    height: 16,
    resizeMode: 'contain'
  },
  itemIcon: {
    marginRight: 16
  }
});
