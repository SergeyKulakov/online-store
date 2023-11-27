import {
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  StyleProp,
  TextInputProperties,
  TextStyle,
  ViewStyle
} from 'react-native';
import React from 'react';
import { ClearButtonMode } from '@brandingbrand/fscomponents';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

export interface SearchScreenResult {
  title: string;
  category?: string;
  [key: string]: any;
}

export interface SerializableSearchScreenProps {
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  itemTextStyle?: TextStyle;
  itemSubtitleStyle?: TextStyle;
  searchResultsScrollViewStyle?: ViewStyle;
  searchBarContainerStyle?: ViewStyle;
  /**
   * Whether or not the search bar should automatically focus when the component mounts.
   * Defaults to true.
   */
  searchBarShouldFocus?: boolean;
  clearButtonText?: string;
  clearButtonStyle?: TextStyle;
  clearButtonWrap?: ViewStyle;
  recentTitle?: string;
  recentTitleStyle?: TextStyle;
  recentTitleWrap?: ViewStyle;
}

export interface SearchScreenProps {
  onClose?: () => void;
  onEndReached: () => void;
  onResultPress?: (result: ProductControllersTypes.Product) => void;
  onInputChange?: (value: string) => void;
  onInputSubmit?: (value: string) => void;
  renderResultItem?: (
    result: ProductControllersTypes.Product,
    index: number,
    inputValue: string
  ) => React.ReactNode;
  renderResultsHeader?: () => React.ReactNode;
  renderNoResults?: () => React.ReactNode;
  renderIdleState?: () => React.ReactNode;
  searchBarProps?: SearchBarProps;
  inputValue?: string;
  results?: ProductControllersTypes.Product[];
  resultsCount: number;
  resultsLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  renderContentUnderSearchBar?: () => React.ReactNode;
  searchResultsScrollViewStyle?: StyleProp<ViewStyle>;
  searchBarContainerStyle?: StyleProp<ViewStyle>;
  clearButtonStyle?: StyleProp<TextStyle>;
  clearButtonWrap?: StyleProp<ViewStyle>;
  recentTitleStyle?: StyleProp<TextStyle>;
  recentTitleWrap?: StyleProp<ViewStyle>;
  screen?: string;
  moveToPIPScreen?: (value: string) => void;
  isMatchWordClicked?: boolean;
  matchWord?: string;
  noResultStyles?: any;
  isSuggestionsLoaded: boolean;
}


export interface SearchBarProps {
  placeholder?: string;
  initialValue?: string;
  value?: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: (input: any, container: any) => void;
  onBlur?: (input: any, container: any) => void;
  onCancel?: () => void;
  renderCancelButton?: () => React.ReactNode;

  // accessibility
  accessibilityLabel?: string;
  rightBtnAccessibilityLabel?: string;

  // visibility
  showSearchIcon?: boolean;
  showLocator?: boolean;
  showCancel?: boolean | 'left' | 'right';
  clearButtonMode?: ClearButtonMode;

  // button
  searchTitle?: string;
  cancelTitle?: string;
  searchIcon?: ImageURISource;
  locateIcon?: ImageURISource;
  cancelImage?: ImageURISource;
  clearIcon?: ImageURISource;
  onLocateButtonPress?: () => void;

  // input
  inputProps?: TextInputProperties;
  shouldClearOnSubmit?: boolean;

  // style
  searchBarContainer?: StyleProp<ViewStyle>;
  searchTitleStyle?: StyleProp<TextStyle>;
  cancelTitleStyle?: StyleProp<TextStyle>;
  locateIconStyle?: StyleProp<ImageStyle>;
  cancelImageStyle?: StyleProp<ImageStyle>;
  rightBtnIcon?: ImageSourcePropType;
  rightBtnStyle?: StyleProp<ViewStyle>;
  rightBtnIconStyle?: StyleProp<ImageStyle>;

  placeholderTextColor?: string;

  cancelButtonWidth?: number;
  cancelButtonAlwaysVisible?: boolean;

  showRightBtnIcon?: boolean;
  onRightBtnPress?: () => void;
  // screen

  screen?: string;
}

export interface SearchCarouselProps {
  data?: ProductControllersTypes.Product[];
  onEndReached: () => void;
  onPressItem: () => void;
}
export interface PopularSearchItem {
  root?: string;
  title?: string;
}
