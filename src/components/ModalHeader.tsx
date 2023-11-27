import React, { FC } from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import {
  assetsImages,
  fonts,
  HIT_SLOP,
  lightMode as palette
} from '@assos/styles';

const styles = StyleSheet.create({
  header: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  title: {
    width: 'auto',
    fontFamily: fonts.orbitron,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    color: palette.textPrimary,
    marginLeft: 'auto',
    marginRight: 'auto',
    textTransform: 'uppercase'
  },
  titleWrapper: {
    marginLeft: 'auto',
    width: '60%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  btnWrapper: {
    width: 40,
    alignItems: 'center'
  }
});

export interface HeaderProps {
  title?: string;
  backAction?: () => void;
  close?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ModalHeader: FC<HeaderProps> = ({
  title,
  backAction,
  close,
  style
}) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.btnWrapper}>
        {!!backAction && (
          <TouchableOpacity
            onPress={backAction}
            activeOpacity={0.7}
            hitSlop={HIT_SLOP}
          >
            <Image source={assetsImages.arrowLeft} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnWrapper}>
        {!!close && (
          <TouchableOpacity
            onPress={close}
            activeOpacity={0.7}
            hitSlop={HIT_SLOP}
          >
            <Image source={assetsImages.close} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
