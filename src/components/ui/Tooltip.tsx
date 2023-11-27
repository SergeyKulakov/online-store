import React, { FunctionComponent } from 'react';
import { LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { lightMode as palette } from '@assos/styles';

export interface TooltipProps {
  positionX?: 'left' | 'right' | 'center';
  positionY?: 'top' | 'bottom';
  style?: StyleProp<ViewStyle>;
  tooltipArrowStyle?: StyleProp<ViewStyle>;
  tooltipArrowContainerStyle?: StyleProp<ViewStyle>;
  show?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10000,
    backgroundColor: palette.systemBackgroundPrimary,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: palette.separatorPrimary,
    shadowRadius: 38,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 19
    }
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  tooltipArrow: {
    width: 14,
    height: 14,
    zIndex: 1,
    backgroundColor: palette.systemBackgroundPrimary,
    borderTopColor: palette.separatorPrimary,
    borderLeftColor: palette.separatorPrimary,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 4
  },
  arrowBottom: {
    transform: [{
      rotate: '-135deg'
    }]
  },
  arrowContainerTop: {
    top: -7
  },
  arrowContainerBottom: {
    bottom: -7
  },
  arrowLeft: {
    justifyContent: 'flex-start',
    left: 14
  },
  arrowCenter: {
    justifyContent: 'center'
  },
  arrowRight: {
    justifyContent: 'flex-end',
    right: 14
  }
});

export const Tooltip: FunctionComponent<TooltipProps> = React.memo(props => {

  const renderTooltipArrow = () => {
    const { positionY, positionX, tooltipArrowStyle, tooltipArrowContainerStyle } = props;

    let mergeTooltipStyle;
    let mergeContainerStyle;

    switch (positionY) {
      case 'top': {
        mergeTooltipStyle = tooltipArrowStyle;
        mergeContainerStyle = [
          styles.arrowContainer,
          styles.arrowContainerTop,
          tooltipArrowContainerStyle
        ];
        break;
      }
      case 'bottom': {
        mergeTooltipStyle = [
          styles.arrowBottom,
          tooltipArrowStyle
        ];
        mergeContainerStyle = [
          styles.arrowContainer,
          styles.arrowContainerBottom,
          tooltipArrowContainerStyle
        ];
        break;
      }
      default: {
        mergeTooltipStyle = tooltipArrowStyle;
        mergeContainerStyle = [
          styles.arrowContainer,
          styles.arrowContainerTop,
          tooltipArrowContainerStyle
        ];
      }
    }

    switch (positionX) {
      case 'left': {
        mergeContainerStyle = [
          styles.arrowLeft,
          ...mergeContainerStyle
        ];
        break;
      }
      case 'right': {
        mergeContainerStyle = [
          styles.arrowRight,
          ...mergeContainerStyle
        ];
        break;
      }
      case 'center': {
        mergeContainerStyle = [
          styles.arrowCenter,
          ...mergeContainerStyle
        ];
        break;
      }
      default: {
        mergeContainerStyle = [
          styles.arrowCenter,
          ...mergeContainerStyle
        ];
      }
    }

    return (
      <View style={mergeContainerStyle}>
        <View style={[styles.tooltipArrow, mergeTooltipStyle]} />
      </View>
    );
  };

  if (!props.show) {
    return null;
  }

  return (
    <View style={[styles.container, props.style]} onLayout={props.onLayout}>
      {renderTooltipArrow()}
      {props.children}
    </View>
  );
});
