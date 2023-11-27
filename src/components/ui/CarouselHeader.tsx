import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n, { keys } from '@assos/lib/translations';
import { assetsImages, font } from '@assos/styles';


export const styles = StyleSheet.create({
  container: {
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
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewAllText: {
    marginRight: 8,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15
  }
});


interface CarouselHeaderProps {
  text: string;
  onViewAllPress: () => void;
}
const CarouselHeader = ({ text, onViewAllPress }: CarouselHeaderProps) => (
  <View style={styles.container}>
    <Text style={styles.carouselHeaderTitle}>{text}</Text>
    <TouchableOpacity style={styles.viewAllContainer} onPress={onViewAllPress}>
      <Text style={styles.viewAllText}>{i18n.string(keys.wishlist.viewAll)}</Text>
      <Image source={assetsImages.arrowRightDecorate} />
    </TouchableOpacity>
  </View>
);

export default CarouselHeader;
