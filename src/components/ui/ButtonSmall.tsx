import React, { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

import { fontFamily, lightMode as palette} from '@assos/styles';

interface ButtonSmallProps {
  text?: string;
  onPress?: () => void | Promise<void>;
  disabled?: boolean;
  activeOpacity?: number;
  loading?: boolean;

  // Styles
  styleContainer?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 50,
    backgroundColor: palette.systemBackgroundSecondary

  },
  text: {
    fontFamily,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    textTransform: 'capitalize'
  }
});

const renderText = (styleText: StyleProp<TextStyle>, text?: string) => {
  return (
    <Text style={[styles.text, styleText]}>
      {text}
    </Text>
  );
};

const ButtonSmall: FC<ButtonSmallProps> = ({
  text,
  activeOpacity,
  styleContainer,
  styleText,
  onPress,
  disabled,
  loading
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      activeOpacity={activeOpacity || 0}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ?
        <ActivityIndicator size='small' /> :
        renderText(styleText, text)}
    </TouchableOpacity>
  );
};

export default ButtonSmall;
