import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { Tooltip, TooltipProps } from './Tooltip';

export interface TooltipAnchorProps extends TooltipProps {
  text: string;
  width?: number;
  show?: boolean;
  timeout?: number;
  tooltipStyle?: StyleProp<ViewStyle>;
  handleChange?: (showing: boolean) => void;
}

export const TooltipAnchor: React.FC<TooltipAnchorProps> = ({
  show: parentState,
  timeout,
  handleChange,
  text,
  children,
  style,
  width = 200,
  tooltipStyle,
  ...tooltipProps
}) => {
  const [localState, setLocalState] = useState(false);
  const [timeoutHandler, setTimeoutHandler] = useState<NodeJS.Timeout>();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const show = parentState ?? localState;
  const setShow = handleChange ? handleChange : setLocalState;

  const handleLayout = (e: LayoutChangeEvent) => {
    const { layout } = e.nativeEvent;
    setPosition({x: layout.x, y: layout.y });
  };

  const toggleShowing = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }

    const handler = timeout
      ? setTimeout(() => {
        if (show) {
          setShow(false);
        }
      }, timeout)
      : undefined;

    setTimeoutHandler(handler);

    return () => {
      if (timeoutHandler) {
        clearTimeout(timeoutHandler);
      }
    };
  }, [timeout, show]);

  return (
    <>
      <Tooltip
        show={show}
        style={[tooltipStyle, { bottom: position.y + 24, left: position.x - 14, width }]}
        {...tooltipProps}
      >
        <Text>{text}</Text>
      </Tooltip>
      <TouchableOpacity style={style} onPress={toggleShowing} onLayout={handleLayout}>
        {children}
      </TouchableOpacity>
    </>
  );
};
