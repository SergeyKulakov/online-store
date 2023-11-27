import { ReactNode } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface MenuItem {
  label: string;
  subLabel?: string;
  icon?: any;
  id: number;
}

export type MenuItemComponent = (
  value: NavMenuItem,
  labelStyle: StyleProp<TextStyle>,
  iconStyle: StyleProp<ImageStyle>
) => ReactNode;

export type MenuLabel = (value: NavMenuItem, labelStyle: StyleProp<TextStyle>) => ReactNode;

export type NavMenuItem = {
  url: string;
} & MenuItem;

export interface MenuListProps {
  items?: NavMenuItem[];
  onPress: (value: NavMenuItem) => void;
  renderLabel?: MenuLabel;
  renderItem?: MenuItemComponent;
  containerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  subLabelStyle?: StyleProp<TextStyle>;
  customAccessory?: ImageSourcePropType;
}

