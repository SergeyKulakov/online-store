import {
  Animated,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import React, { Component } from 'react';

import { lightMode as palette } from '@assos/styles';

export interface ToggleButtonProps {
  controllable?: boolean;
  state?: boolean;
  disableAnimation?: boolean;
  renderTogglePin?: () => React.ReactNode;
  onPress?: (state: boolean) => void;

  // Styles
  wrapperStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  containerActiveStyle?: StyleProp<ViewStyle>;
  containerInactiveColor?: string;
  containerActiveColor?: string;
  containerPinStyle?: StyleProp<ViewStyle>;
  containerPinActiveStyle?: StyleProp<ViewStyle>;
}

export interface ToggleButtonState {
  isSelected: boolean;
  containerWidth: number;
  containerPinWidth: number;
  containerPinWidthInitialized: boolean;
  pinIndentAnimation: Animated.Value;
}

const TOGGLE_CONTAINER_WIDTH_DEFAULT = 50;
const TOGGLE_CONTAINER_HEIGHT_DEFAULT = 32;
const TOGGLE_PIN_SIZE_DEFAULT = 32;

const styles = StyleSheet.create({
  container: {
    width: TOGGLE_CONTAINER_WIDTH_DEFAULT,
    height: TOGGLE_CONTAINER_HEIGHT_DEFAULT,
    backgroundColor: palette.buttonTertiary,
    borderRadius: 16
  },
  containerPin: {
    width: TOGGLE_PIN_SIZE_DEFAULT,
    height: TOGGLE_PIN_SIZE_DEFAULT,
    borderRadius: TOGGLE_PIN_SIZE_DEFAULT / 2,
    borderWidth: 2,
    borderColor: palette.buttonTertiary,
    backgroundColor: palette.systemBackgroundPrimary
  }
});


class ToggleButton extends Component<ToggleButtonProps, ToggleButtonState> {

  constructor(props: ToggleButtonProps) {
    super(props);

    this.state = {
      isSelected: this.props.state || false,
      containerWidth: TOGGLE_CONTAINER_WIDTH_DEFAULT,
      containerPinWidth: TOGGLE_PIN_SIZE_DEFAULT,
      containerPinWidthInitialized: false,
      pinIndentAnimation: new Animated.Value(
        !!this.props.state ? 1 : 0
      )
    };
  }

  componentDidUpdate(): void {
    if (this.props.controllable && this.state.isSelected !== this.props.state) {
      this.toggleAccordion();
    }
  }

  render(): JSX.Element {
    const { containerPinWidth, containerWidth, isSelected, pinIndentAnimation } = this.state;

    const indentation = {
      paddingLeft: pinIndentAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, containerWidth - containerPinWidth]
      })
    };

    const animatedColor = pinIndentAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        this.props.containerInactiveColor || palette.buttonTertiary,
        this.props.containerActiveColor || palette.buttonPrimary
      ]
    });

    return (
      <View style={this.props.wrapperStyle}>
        <TouchableWithoutFeedback
          onPress={this.toggleAccordion}
          accessibilityRole={'button'}
        >
          <Animated.View
            onLayout={this.containerOnLayout}
            style={[
              styles.container, this.props.containerStyle,
              {
                backgroundColor: animatedColor
              },
              isSelected && this.props.containerActiveStyle
            ]}
          >
            <Animated.View style={indentation}>
              <Animated.View
                onLayout={this.pinOnLayout}
                style={[
                  styles.containerPin, this.props.containerPinStyle,
                  {
                    borderColor: animatedColor
                  },
                  isSelected && this.props.containerPinActiveStyle
                ]}
              >
                {this.props.renderTogglePin && this.props.renderTogglePin()}
              </Animated.View>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  private animateTogglePin = (indent: number) => {
    if (!this.props.disableAnimation) {
      Animated.spring(this.state.pinIndentAnimation, {
        bounciness: 0,
        toValue: indent,
        useNativeDriver: false
      }).start();
    } else {
      this.setState({
        pinIndentAnimation: new Animated.Value(indent)
      });
    }
  }

  private containerOnLayout = (event: LayoutChangeEvent) => {
    const { isSelected } = this.state;
    const width = event.nativeEvent.layout.width;
    this.setState({
      containerWidth: width
    });
    if (isSelected) {
      this.setState({
        pinIndentAnimation: new Animated.Value(1)
      });
    }
  }

  private pinOnLayout = (event: LayoutChangeEvent) => {
    const { containerPinWidthInitialized, isSelected} = this.state;
    const width = event.nativeEvent.layout.width;
    this.setState({
      containerPinWidth: width,
      containerPinWidthInitialized: true
    });
    if (isSelected && !containerPinWidthInitialized) {
      this.setState({
        pinIndentAnimation: new Animated.Value(1)
      });
    }
  }

  private toggleAccordion = () => {
    const { isSelected } = this.state;

    this.setState({
      isSelected: !isSelected
    });

    if (!!this.props.onPress) {
      this.props.onPress(!isSelected);
    }

    if (isSelected) {
      this.animateTogglePin(0);
    } else {
      this.animateTogglePin(1);
    }
  }
}

export default ToggleButton;
