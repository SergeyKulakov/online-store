import {
  ImageSourcePropType,
  ImageStyle,
  ListRenderItemInfo,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';
import {SelectableRowProps } from '../SelectableRow';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { FilterOption } from '../../Hooks/useFilterOptions';

export interface FilterItem extends CommerceTypes.Refinement {
  values?: FilterItemValue[];
  [key: string]: any;
}


export interface FilterItemValue extends CommerceTypes.RefinementValue {
  [key: string]: any;
}


export interface FilterProps {
  items: FilterOption[];
  onApply: (selectedItems: Record<string, string[]>, info?: { isButtonPress: boolean }) => void;
  onClose?: () => void;
  selectedItems?: Record<string, string[]>;
  style?: StyleProp<ViewStyle>;
  closeButtonStyle?: StyleProp<ViewStyle>;
  resetButtonStyle?: StyleProp<ViewStyle>;
  closeButtonImageStyle?: StyleProp<ImageStyle>;
  resetButtonTextStyle?: StyleProp<TextStyle>;
  cancelButtonTextStyle?: StyleProp<TextStyle>;
  closeIcon?: ImageSourcePropType;
  applyText?: string;
  resetText?: string;
  floatingReset?: boolean;
  itemStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  itemTextSelectedStyle?: StyleProp<TextStyle>;
  selectedValueStyle?: StyleProp<TextStyle>;
  selectableRowProps?: Partial<SelectableRowProps>;
  singleFilterIds?: string[]; // Filter IDs for which only one value can be selected at a time
  ignoreActiveStyleIds?: string[]; // Filter IDs for which active styling won't be applied
  applyOnSelect?: boolean;
  renderFilterItem?: (
    item: FilterItem,
    i: number,
    selectedValues: string[],
    handlePress: () => void,
    renderFilterItem: (
      info: Omit<ListRenderItemInfo<FilterItem>, 'separators'>,
      skipCustomRender: boolean
    ) => JSX.Element
  ) => JSX.Element;
  renderFilterItemValue?: (
    item: FilterItem,
    i: number,
    value: FilterItemValue,
    handleSelect: () => void,
    selected: boolean,
    renderFilterItemValue: (
      item: FilterItem,
      skipCustomRender?: boolean
    ) => (info: Omit<ListRenderItemInfo<FilterItemValue>, 'separators'>) => JSX.Element
  ) => JSX.Element;
  renderSecondLevel?: (
    item: FilterItem,
    goBack: () => void,
    renderSecondLevel: (
      item: FilterItem,
      skipCustomRender?: boolean
    ) => JSX.Element
  ) => JSX.Element;
  showUnselected?: boolean;
  showSelectedCount?: boolean;
  refineText?: string;
  filterHeader?: StyleProp<ViewStyle>;
  filterTitleStyle?: StyleProp<TextStyle>;
  secondLevelTitle?: string;
  secondLevelHeaderStyle?: StyleProp<ViewStyle>;
  secondLevelTitleStyle?: StyleProp<TextStyle>;
  secondLevelShowApply?: boolean;
  optionsFooterStyles?: StyleProp<ViewStyle>;
  resolve: (data: void) => void;
  reject: () => void;
}
