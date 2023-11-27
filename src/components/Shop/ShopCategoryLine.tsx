import React, { FC } from 'react';
import { CategoryLineProps } from '@brandingbrand/fscomponents/src/components/CategoryLine';
import { Image, Text, TouchableOpacity, View} from 'react-native';

import {shopStyles as styles} from './styles';


export const ShopCategoryLine: FC<CategoryLineProps> = ({
  onPress,
  id,
  title,
  image,
  titleStyle
}) => {

  const handlePress = () => {
    onPress?.({id, title});
  };

  const renderItemLabel = () => {
    return (
      <>
        <View style={[styles.labelContainer]}>
          <Text style={[styles.label, titleStyle]}>{title}</Text>
        </View>
      </>
    );
  };

  return (
    <View
      key={id}
      style={styles.itemContainer}
    >
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <>
          {renderItemLabel()}
          {!!image && (
            <Image
              height={16}
              width={9}
              source={image}
              style={styles.icon}
            />
          )}
        </>

      </TouchableOpacity>
    </View>
  );
};
