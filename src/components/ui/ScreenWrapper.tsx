import React, { PureComponent } from 'react';
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  SafeAreaView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';

import Localize from './Localize';

const flagshipLogo = require('@assets/icons/FlagshipLogo.png');

const keyboardAvoidingDefaults: KeyboardAvoidingViewProps = {
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  keyboardVerticalOffset: 0,
  style: { flex: 1 }
};
const styles = StyleSheet.create({
  background: {},
  container: {
    flex: 1
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 40
  }
});

export interface ScreenWrapperProps {
  style?: StyleProp<ViewStyle>;
  needInSafeArea?: boolean;

  // Whether or not the wrapper should scroll it's children. Defaults to true
  scroll?: boolean;
  scrollViewProps?: ScrollViewProps;

  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  hideWebHeader?: boolean;
  hideWebFooter?: boolean;
}

export interface ScreenWrapperState {
  safeAreaInsets: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  showEmail: boolean;
}

export class ScreenWrapper extends PureComponent<ScreenWrapperProps, ScreenWrapperState> {
  constructor(props: ScreenWrapperProps) {
    super(props);
    this.state = {
      safeAreaInsets: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      // TODO: set this based on something more persistent
      showEmail: true
    };
  }

  renderHeader = (): React.ReactNode => {
    return (
      <View style={styles.headerContainer}>
        <Image source={flagshipLogo} resizeMode={'contain'} />
      </View>
    );
  }

  getKeyboardAvoidingOptions = (): KeyboardAvoidingViewProps => {
    const { keyboardAvoidingViewProps, needInSafeArea } = this.props;
    const { safeAreaInsets } = this.state;

    const options = {
      ...keyboardAvoidingDefaults,
      ...keyboardAvoidingViewProps
    };

    /**
     * Fix keyboardVerticalOffset when in a SafeAreaView.
     *
     * When wrapped in a SafeAreaView, the KeyboardAvoidingView does not
     * account for the SafeAreaView inset padding when calculating the
     * keyboardVerticalOffset.
     */
    if (needInSafeArea && options.keyboardVerticalOffset && options.keyboardVerticalOffset > 0) {
      options.keyboardVerticalOffset += safeAreaInsets.bottom;
    }

    return options;
  }

  closeEmail = () => {
    this.setState({
      showEmail: false
    });
  }

  // tslint:disable:cyclomatic-complexity
  render(): JSX.Element {
    const {
      children,
      needInSafeArea,
      scroll,
      scrollViewProps,
      style
    } = this.props;
    const keyboardAvoidingOptions = this.getKeyboardAvoidingOptions();
    const Container = needInSafeArea ? SafeAreaView : View;
    let contents;

    if (scroll) {
      // Scroll by default unless we're explicitly passed false
      contents = <Animated.ScrollView {...scrollViewProps}>{children}</Animated.ScrollView>;
    } else {
      contents = children;
    }

    return (
      <Localize>
        <Container style={[styles.container, styles.background, style]}>
          <KeyboardAvoidingView {...keyboardAvoidingOptions}>
            {contents}
          </KeyboardAvoidingView>
        </Container>
      </Localize>
    );
  }
}
