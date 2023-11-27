import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import React, { FC } from 'react';

import { lightMode as palette } from '@assos/styles';

interface RadioButtonProps {
  active?: boolean;
  styleContainer?: StyleProp<ViewStyle>;
  styleCircle?: StyleProp<ViewStyle>;
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderColor: palette.systemBackgroundPopover,
    backgroundColor: palette.systemBackgroundPrimary,
    borderRadius: 50
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: palette.systemBackgroundPopover
  }
});

const RadioButton: FC<RadioButtonProps> = ({
  active,
  styleContainer,
  styleCircle
}) => {
  return (
    <View
      style={[style.container, styleContainer]}
    >
      {active && (
        <View style={[style.circle, styleCircle]} />
      )}
    </View>
  );
};

export default RadioButton;
