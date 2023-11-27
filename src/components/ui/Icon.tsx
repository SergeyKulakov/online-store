import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';

import { assetsImages } from '@assos/styles';

export type Size = 'small' | 'medium' | 'large';

const styles = (size?: Size) =>
  StyleSheet.create({
    icon: {
      height: size === 'small' ? 10 : size === 'large' ? 35 : 25,
      width: size === 'small' ? 10 : size === 'large' ? 35 : 25,
      resizeMode: 'contain'
    }
  });

export interface IconProps {
  icon: keyof typeof assetsImages;
  size?: Size;
  style?: StyleProp<ImageStyle>;
}

export const Icon: React.FC<IconProps> = ({ icon, size, style: styleProp }) => {
  const style = StyleSheet.flatten([styles(size).icon, styleProp]);

  return <Image style={style} source={assetsImages[icon]} />;
};
