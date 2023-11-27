import { font } from '@assos/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: 276,
    marginTop: 24
  },
  carouselItemWrapper: {
    marginRight: 20
  },
  container: {
    marginHorizontal: 20,
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21
  },
  carouselHeaderTitle: {
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  viewAll: {
    fontFamily: font.workSans,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.5
  }
});

export default styles;
