import React from 'react';
import { StyleProp, Text, TextProps, View, ViewStyle } from 'react-native';

import { assetsImages } from '@assos/styles';

import { TooltipAnchor } from './TooltipAnchor';
import { OutlineIcon } from './OutlineIcon';

export interface TextWithInfoProps extends TextProps {
  text: string;
  tooltip: string;
  timeout?: number;
  showTooltip?: boolean;
  handleTooltipChange?: (show: boolean) => void;
  tooltipStyle?: StyleProp<ViewStyle>;
  tooltipWidth?: number;
  tooltipAnchorStyle?: StyleProp<ViewStyle>;
  icon?: keyof typeof assetsImages;
}

export const TextWithInfo: React.FC<TextWithInfoProps> = ({
  text,
  icon,
  timeout,
  tooltip,
  showTooltip,
  handleTooltipChange,
  tooltipStyle,
  tooltipWidth,
  tooltipAnchorStyle,
  ...textProps
}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text {...textProps}>{text}</Text>
      <TooltipAnchor
        text={tooltip}
        width={tooltipWidth}
        timeout={timeout}
        show={showTooltip}
        handleChange={handleTooltipChange}
        positionX='left'
        positionY='bottom'
        style={tooltipAnchorStyle}
        tooltipStyle={tooltipStyle}
      >
        <OutlineIcon icon={icon ?? 'help'} size='small' />
      </TooltipAnchor>
    </View>
  );
};
