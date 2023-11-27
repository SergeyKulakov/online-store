import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle } from 'react-native';

import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 23,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderColor: palette.separatorPrimary,
    borderBottomWidth: 1
  },
  close: {
    position: 'absolute',
    top: 26,
    right: 20
  },
  back: {
    position: 'absolute',
    top: 26,
    left: 20
  },
  title: {
    fontFamily,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    color: palette.textPrimary
  },
  content: {
    flex: 1
  },
  btn: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  newAddressContainer: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: palette.separatorPrimary
  },
  newAddressText: {
    fontFamily,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.5,
    color: palette.textPrimary
  }
});

const HIT_SLOP = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};


interface Props {
  title: string;
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backButton?: boolean;
  onBack?: () => void;
  arrowIcon?: any;
}

const ModalHeader = ({
  onClose,
  onBack,
  containerStyle,
  title,
  titleStyle,
  backButton,
  arrowIcon
}: Props) => {
  return (
    <View style={[styles.header, containerStyle]}>
      {
        backButton && (
          <TouchableOpacity
            style={styles.back}
            onPress={onBack}
            activeOpacity={0.7}
            hitSlop={HIT_SLOP}
          >
            <Image source={arrowIcon || assetsImages.backArrow}/>
          </TouchableOpacity>
        )
      }
      <Text style={[styles.title, titleStyle]}>
        {title}
      </Text>
      <TouchableOpacity
        style={styles.close}
        onPress={onClose}
        activeOpacity={0.7}
        hitSlop={HIT_SLOP}
      >
        <Image source={assetsImages.close} />
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;
