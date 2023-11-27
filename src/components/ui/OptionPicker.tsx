import React from 'react';
import { isEqual } from 'lodash-es';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { lightMode as palette } from '@assos/styles';

import RadioButton from './RadioButton';

interface OptionPickerProps<T> {
  options: T[];
  selected?: T;
  renderOption?: (option: T, i: number) => React.ReactElement;
  renderOptionContent?: (option: T) => React.ReactElement;
  onSelect?: (option: T) => void;
  //  Styles
  containerStyle?: StyleProp<ViewStyle>;
  optionContainerStyle?: StyleProp<ViewStyle>;

  // Radio Button Styles
  radioButtonContainerStyle?: StyleProp<ViewStyle>;
  selectedComparator?: (option: T, selected: T) => boolean;
}

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 1,
    borderColor: palette.separatorPrimary
  },
  optionContainerStyle: {
    padding: 18,
    borderBottomWidth: 1,
    borderColor: palette.separatorPrimary
  },
  optionContentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

// tslint:disable-next-line:typedef
function OptionPicker<T extends any>(
  props: OptionPickerProps<T>
) {
  const {
    options,
    selected,
    renderOption,
    renderOptionContent,
    onSelect,
    containerStyle,
    optionContainerStyle,
    selectedComparator
  } = props;

  const selectOption = (option: T) => () => {
    if (onSelect) {
      onSelect(option);
    }
  };

  const renderOptionSelector = (option: T, i: number) => {
    let isSelected = false;
    if (!!selected && selectedComparator) {
      isSelected = selectedComparator(option, selected);
    } else if (!!selected) {
      isSelected = !!selected && isEqual(selected, option);
    }

    return (
      <TouchableOpacity
        key={i}
        style={[styles.optionContainerStyle, optionContainerStyle]}
      >
        <TouchableOpacity
          onPress={selectOption(option)}
          style={[styles.optionContentContainerStyle]}
        >
          {!!renderOptionContent && renderOptionContent(option)}
          <RadioButton active={isSelected} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {
        options?.map(
          !!renderOption ?
            renderOption :
            renderOptionSelector
        )
      }
    </View>
  );
}

export default OptionPicker;
