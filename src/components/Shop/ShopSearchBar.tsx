import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '@brandingbrand/fsapp';

import { assetsImages, fonts, HIT_SLOP } from '@assos/styles';
// import { shopStyles as styles } from './styles';
import { i18n, keys } from '@assos/lib';

export const ShopSearchBar: FC = () => {
  const navigator = useNavigator();

  const handleNavigate = () => {
    navigator.open('/shop/search');
  };

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      activeOpacity={0.7}
      hitSlop={HIT_SLOP}
    >
      <View
        style={{
          height: 30,
          flexDirection: 'row',
          marginHorizontal: 30,
          marginVertical: 30,
          alignItems: 'center',
          borderBottomColor: '#959595',
          borderBottomWidth: 1,
          paddingBottom: 12
        }}
      >
        <Image
          source={assetsImages.search}
          style={{ marginRight: 12, height: 30, resizeMode: 'contain' }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            fontFamily: fonts.maisonNeue
          }}
        >
          {i18n.string(keys.shop.placeHolder)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
