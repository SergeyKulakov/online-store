import React, { ReactNode } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { assetsImages } from '@assos/styles';
import { styles } from './styles';
import { MenuListProps, NavMenuItem } from './types';

function renderMenuItem(
  props: MenuListProps
): (item: NavMenuItem) => ReactNode {
  return (item): ReactNode => {
    const { onPress, renderLabel, labelStyle, subLabelStyle, customAccessory, renderItem } = props;

    const handlePress = () => {
      onPress(item);
    };

    const renderItemLabel = () => {
      return !!renderLabel
        ? renderLabel(item, StyleSheet.flatten([styles.label, labelStyle]))
        : (
          <>
            <View style={styles.labelContainer}>
              <Text style={[styles.label, labelStyle]}>{item.label}</Text>
              <Text style={[styles.subLabel, subLabelStyle]}>{item.subLabel}</Text>
            </View>
            {!!item.icon && <Image style={styles.itemIcon} source={item.icon} />}
          </>
        );
    };

    return (
      <View
        key={item.id}
        style={[styles.itemContainer, item.id === 0 && styles.firstItemContainer]}
      >
        <TouchableOpacity key={item.label} onPress={handlePress} style={styles.button}>
          {!!renderItem
            ? (renderItem(item, StyleSheet.flatten([styles.label, labelStyle]), styles.icon))
            : (
              <>
                {renderItemLabel()}
                <Image
                  source={customAccessory ? customAccessory : assetsImages.arrowRight}
                  style={styles.icon}
                />
              </>
            )
          }
        </TouchableOpacity>
      </View>
    );
  };
}

export const MenuList = ({
  items,
  containerStyle,
  itemContainerStyle,
  ...props
}: MenuListProps) => (
  <View style={[styles.container, containerStyle]}>
    {items?.map(renderMenuItem({ ...props, containerStyle: itemContainerStyle }))}
  </View>
);
