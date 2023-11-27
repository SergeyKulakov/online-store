import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { assetsImages, lightMode as palette } from '@assos/styles';

import { Icon, Size } from './Icon';

const styles = (size?: Size) =>
  StyleSheet.create({
    iconWrapper: {
      height: size === 'small' ? 14 : size === 'large' ? 50 : 37,
      width: size === 'small' ? 14 : size === 'large' ? 50 : 37,
      borderRadius: size === 'small' ? 14 : size === 'large' ? 50 : 37,
      borderWidth: 1,
      borderColor: palette.iconPrimary,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export interface OutlineIconProps extends Omit<ViewProps, 'style'> {
  icon: keyof typeof assetsImages;
  size?: Size;
}

export const OutlineIcon: React.FC<OutlineIconProps> = ({ icon, size, ...otherProps }) => {
  return (
    <View style={styles(size).iconWrapper} {...otherProps}>
      <Icon icon={icon} size={size} />
    </View>
  );
};
