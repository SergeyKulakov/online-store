import React, {PureComponent} from 'react';
import {
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { isIos } from '@assos/helpers';
import { SearchBarProps } from '@assos/components/Search/types';

import { SearchBarStyles as S, tr, trKeys} from '@brandingbrand/fscomponents';
import { searchStyles as styles } from './styles';
import { assetsImages } from '@assos/styles';


const kCancelButtonWidthDefault = 75; // In pts
const kCancelButtonAnimationDuration = 200; // In ms

export interface SearchBarState {
  value: string;
  cancelButtonWidth: Animated.Value;
  isFocused: boolean;
}

export class SearchBar extends PureComponent<SearchBarProps, SearchBarState> {
  static defaultProps: Partial<SearchBarProps> = {
    shouldClearOnSubmit: true
  };
  input: any;
  container: any;

  constructor(props: SearchBarProps) {
    super(props);

    let cancelButtonWidth;

    if (props.cancelButtonAlwaysVisible) {
      cancelButtonWidth = new Animated.Value(props.cancelButtonWidth || kCancelButtonWidthDefault);
    } else {
      cancelButtonWidth = new Animated.Value(0);
    }

    this.state = {
      value: props.initialValue || '',
      cancelButtonWidth,
      isFocused: false
    };
  }

  render(): any {
    const {
      showCancel,
      showLocator,
      searchBarContainer
    } = this.props;

    return (
      <View ref={this.saveContainerRef} style={[S.container, searchBarContainer]}>
        <View style={S.searchBarContainer}>
          {(showCancel === 'left') && this.renderCancelButton()}
          {showLocator && this.renderLocateButton()}
          {this.renderInput()}
          {(showCancel === true || showCancel === 'right') && this.renderCancelButton()}
        </View>
      </View>
    );
  }

  saveContainerRef = (container: any) => (this.container = container);
  saveInputRef = (input: any) => (this.input = input);

  renderInput = () => {
    const {
      accessibilityLabel,
      placeholder,
      clearButtonMode,
      searchIcon,
      inputProps,
      showSearchIcon,
      placeholderTextColor
    } = this.props;

    const {isFocused} = this.state;
    const imageStyle: StyleProp<ImageStyle> = [
      S.searchIcon,
      isFocused && S.searchIconFocused,
      styles.searchIcon
    ];

    return (
      <View style={[S.inputContainer, styles.searchBarInputContainer]}>
        {showSearchIcon && searchIcon &&
        <Image source={searchIcon} style={imageStyle} resizeMode='contain'/>
        }
        <TextInput
          style={[S.input, styles.searchBarInputText]}
          ref={this.saveInputRef}
          onChangeText={this.handleChangeText}
          value={this.props.value ?? this.state.value}
          onSubmitEditing={this.handleSubmit}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          clearButtonMode={clearButtonMode || 'never'}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          returnKeyType='done'
          accessibilityLabel={accessibilityLabel || 'search bar'}
          underlineColorAndroid='transparent'
          {...inputProps}
        />
        {this.renderAndroidClearButton()}
        {this.renderRightBtnIcon()}
      </View>
    );
  }

  renderAndroidClearButton = () => {
    if (
      this.props.clearButtonMode === 'never' ||
      isIos ||
      !this.state.value ||
      this.state.value.length === 0 ||
      !this.props.clearButtonMode
    ) {
      return null;
    }

    const icon = (
      <Image
        source={this.props.clearIcon || assetsImages.clearIcon}
        style={[styles.rightIcon, styles.searchBarClearIcon]}
        resizeMode='contain'
      />
    );

    return (
      <TouchableOpacity
        onPress={this.handleClear}
        accessibilityRole='button'
        style={[{
          position: 'absolute',
          right: 0
        }, styles.searchBarClearIconWrapper]}
      >
        {icon}
      </TouchableOpacity>
    );
  }

  renderRightBtnIcon = () => {
    const {
      showRightBtnIcon,
      rightBtnIcon,
      onRightBtnPress,
      onSubmit,
      rightBtnIconStyle,
      rightBtnStyle
    } = this.props;

    if (!showRightBtnIcon || !rightBtnIcon) {
      return null;
    }

    const icon = <Image source={rightBtnIcon} style={rightBtnIconStyle} resizeMode='contain'/>;

    if (!onRightBtnPress && !onSubmit) {
      return icon;
    }

    return (
      <TouchableOpacity
        style={rightBtnStyle}
        onPress={onRightBtnPress || this.handleSubmit}
        accessibilityLabel={this.props.rightBtnAccessibilityLabel ||
        tr.string(
          trKeys.flagship.search.actions.search.accessibilityLabel, {value: this.state.value}
        )}
        accessibilityRole='button'
      >
        {icon}
      </TouchableOpacity>
    );
  }

  handleChangeText = (value: string) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  handleSubmit = () => {
    const {onSubmit, shouldClearOnSubmit} = this.props;

    if (onSubmit) {
      onSubmit(this.state.value);
    }

    this.input.blur();
    if (shouldClearOnSubmit) {
      this.setState({value: ''});
    }
  }

  handleCancel = () => {
    this.setState({value: ''});
    this.input.blur();
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handleClear = () => {
    this.input.blur();
    this.setState({value: ''});

    if (this.props.onChange) {
      this.props.onChange('');
    }
  }

  handleFocus = () => {
    const {cancelButtonAlwaysVisible, cancelButtonWidth, onFocus} = this.props;

    this.setState({isFocused: true});

    if (onFocus) {
      onFocus(this.input, this.container);
    }

    if (!cancelButtonAlwaysVisible) {
      // The cancel button may not be visible. Animate it to full width.
      Animated.timing(this.state.cancelButtonWidth, {
        toValue: cancelButtonWidth || kCancelButtonWidthDefault,
        duration: kCancelButtonAnimationDuration,
        useNativeDriver: false
      }).start();
    }
  }

  handleBlur = () => {
    const {cancelButtonAlwaysVisible, onBlur} = this.props;

    this.setState({isFocused: false});

    if (onBlur) {
      onBlur(this.input, this.container);
    }

    if (!cancelButtonAlwaysVisible) {
      // Cancel button is not supposed to be visible on blur. Animate it away.
      Animated.timing(this.state.cancelButtonWidth, {
        toValue: 0,
        duration: kCancelButtonAnimationDuration,
        useNativeDriver: false
      }).start();
    }
  }

  handleLocate = () => {
    const {onLocateButtonPress} = this.props;
    if (onLocateButtonPress) {
      onLocateButtonPress();
    }
  }

  focusInput = () => {
    this.input.focus();
  }

  renderCancelButton = () => {
    const {
      cancelImage,
      cancelTitle,
      renderCancelButton
    } = this.props;

    const {cancelButtonWidth} = this.state;

    if (renderCancelButton) {
      return renderCancelButton();
    }

    const viewStyle = cancelButtonWidth ? {width: cancelButtonWidth} : null;
    // if cancelButtonWidth is defined, parent width is defined, so just fill all the space
    const cancelStyle = cancelButtonWidth ? {flex: 1} : {width: kCancelButtonWidthDefault};
    const cancelImageBoxStyleInput = styles.cancelImageBox ?? null;
    const touchableStyle = [S.rightButton, cancelStyle, cancelImageBoxStyleInput];

    return (
      <Animated.View style={[viewStyle, styles.cancelContainer]}>
        <TouchableOpacity
          style={touchableStyle}
          onPress={this.handleCancel}
          accessibilityLabel='Cancel search'
          accessibilityRole='button'
        >
          {cancelImage ? (
            <Image
              source={cancelImage}
              style={styles.cancelImage}
            />
          ) : (
            <Text>
              {cancelTitle || 'Cancel'}
            </Text>
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  }

  renderLocateButton = () => {
    const {locateIcon} = this.props;

    if (!locateIcon) {
      console.warn('locateIcon is required to show locator');
      return null;
    }

    return (
      <TouchableOpacity
        style={S.locateButton}
        onPress={this.handleLocate}
        accessibilityLabel='Locate me'
        accessibilityRole='button'
      >
        <Image source={locateIcon} style={[S.locateIcon]} resizeMode='contain'/>
      </TouchableOpacity>
    );
  }
}
