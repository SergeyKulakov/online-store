import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '@brandingbrand/fsapp';

import { assetsImages, HIT_SLOP } from '@assos/styles';
import { styles } from './PIPHeader.styles';


export const PIPHeader: FC<{ title?: string; isHideSearch?: boolean }> = ({
  title,
  isHideSearch
}) => {
  const navigator = useNavigator();


  const handleNavigate = () => {
    navigator.open('/shop');
  };

  return (
    <View style={styles.header}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={handleNavigate} activeOpacity={0.7} hitSlop={HIT_SLOP}>
          <Image source={assetsImages.arrowBackWhite}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.btnWrapper}>
        {!isHideSearch && (
          <TouchableOpacity
            onPress={handleNavigate}
            activeOpacity={0.7}
            hitSlop={HIT_SLOP}
          >
              <Image source={assetsImages.searchWhite}/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
