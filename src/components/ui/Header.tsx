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

import { assetsImages, font, HIT_SLOP, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  header: {
    height: 104,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 42,
    backgroundColor: palette.headerBackgroundPIP
  },
  title: {
    width: 'auto',
    fontFamily: font.orbitronRegular,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    color: palette.white,
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
    marginLeft: 10,
    width: 40,
    alignItems: 'center',
    marginRight: -50
  }
});

export interface HeaderProps {
  title?: string;
  backAction?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Header: FC<HeaderProps> = ({
  title,
  backAction,
  style
}) => {
  return (
    <View style={[styles.header, style]}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={backAction}
          activeOpacity={0.7}
          hitSlop={HIT_SLOP}
        >
          <Image source={assetsImages.arrowBack} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
