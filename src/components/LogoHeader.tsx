import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { assetsImages } from '@assos/styles';

const styles = StyleSheet.create({
  image: {
    height: 28,
    resizeMode: 'contain',
    marginBottom: 24

  },
  imageWrapper: {
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'black'
  }
});

const LogoHeader = () => (
  <View style={styles.imageWrapper}>
    <Image source={assetsImages.assosLogoWhiteText} style={styles.image} />
  </View>
);

export default LogoHeader;
