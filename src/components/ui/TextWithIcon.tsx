import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

import { assetsImages } from '@assos/styles';

import { Icon } from './Icon';

export type Position = 'before' | 'after';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginLeft: 4,
    marginRight: 4
  }
});

export interface TextWithIconProps extends TextProps {
  icon: keyof typeof assetsImages;
  position?: Position;
}

export const TextWithIcon: React.FC<TextWithIconProps> = ({
  position,
  icon,
  children,
  ...textProps
}) => {
  switch (position) {
    case 'after': {
      return (
        <View style={styles.container}>
          <Text {...textProps}>{children}</Text>
          <Icon icon={icon} size='medium' />
        </View>
      );
    }
    case 'before':
    default: {
      return (
        <View style={styles.container}>
          <Icon style={styles.icon} icon={icon} size='medium' />
          <Text {...textProps}>{children}</Text>
        </View>
      );
    }
  }
};
