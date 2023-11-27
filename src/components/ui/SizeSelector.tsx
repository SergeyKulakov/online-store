import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle, TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import React, { FunctionComponent, ReactNode } from 'react';

import { fontFamily, lightMode as palette } from '@assos/styles';

const SizeSelectorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
    marginBottom: -12
  },
  sizeOption: {
    height: 50,
    width: 76,
    borderColor: palette.separatorSecondary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 12
  },
  sizeOptionSelected: {
    borderColor: palette.buttonPrimary,
    borderWidth: 2
  },
  sizeOptionNotAvailable: {
    backgroundColor: 'rgba(169, 169, 169, 0.2)'
  },
  sizeOptionNotAvailableCrossing: {
    position: 'absolute',
    width: 87,
    borderWidth: 1,
    borderColor: palette.separatorSecondary,
    transform: [{ rotate: '-32deg' }]
  },
  sizeValueText: {
    color: palette.textSecondary,
    fontFamily,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1
  },
  sizeSelectedValueText: {
    fontWeight: 'bold',
    color: '#000'
  }
});

interface SizeSelectorProps {
  sizes: CommerceTypes.OptionValue[];
  selectedSize?: string;
  onSelectSize: (size: CommerceTypes.OptionValue) => void;

  // Custom props
  disableCrossing?: boolean;
  // Styles
  containerStyle?: StyleProp<ViewStyle>;
  sizeOptionStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  textStyleSelected?: StyleProp<TextStyle>;
  optionNotAvailableStyle?: StyleProp<ViewStyle>;
  crossingStyle?: StyleProp<ViewStyle>;
}

export const SizeSelector: FunctionComponent<SizeSelectorProps> = React.memo(props => {
  const {
    sizes,
    selectedSize,
    onSelectSize,
    disableCrossing,
    containerStyle,
    sizeOptionStyle,
    textStyle,
    textStyleSelected,
    optionNotAvailableStyle,
    crossingStyle
  } = props;

  const onSelect = (size: CommerceTypes.OptionValue) => () => {
    onSelectSize(size);
  };

  const renderSizeOption = (size: CommerceTypes.OptionValue, index: number): ReactNode => {
    const isSelected = selectedSize === size.value;
    const isNotAvailable = !size.available;

    const styleSelectedText: StyleProp<TextStyle> = !!textStyleSelected
      ? textStyleSelected
      : SizeSelectorStyles.sizeSelectedValueText;
    const sizeOptionNotAvailable: StyleProp<ViewStyle> = !!optionNotAvailableStyle
      ? optionNotAvailableStyle
      : SizeSelectorStyles.sizeOptionNotAvailable;

    return (
      <TouchableOpacity
        key={index}
        style={[
          sizeOptionStyle || SizeSelectorStyles.sizeOption,
          isSelected && SizeSelectorStyles.sizeOptionSelected,
          isNotAvailable && sizeOptionNotAvailable
        ]}
        onPress={onSelect(size)}
        disabled={isNotAvailable}
      >
        {(!disableCrossing && isNotAvailable) && (
          <View
            style={[
              SizeSelectorStyles.sizeOptionNotAvailableCrossing,
              crossingStyle
            ]}
          />
        )}
        <Text
          style={[
            SizeSelectorStyles.sizeValueText,
            isSelected && styleSelectedText,
            textStyle
          ]}
        >
          {size.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[SizeSelectorStyles.container, containerStyle]}>
      {sizes.map(renderSizeOption)}
    </View>
  );
});
