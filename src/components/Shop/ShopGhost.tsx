import { keyExtractor } from '@assos/helpers/list';
import ContentLoader, { Rect } from '@assos/lib/RNContentLoader';
import { lightMode } from '@assos/styles';
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';

const {width} = Dimensions.get('window');


const GHOST_ITEMS = Array(10).map((_, index) => index + 1);

export const ShopGhost = React.memo(() => {
  const renderItem = () => (
    <View
      style={{
        height: 103,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1'
      }}
    >
      <ContentLoader
        width={width - 36}
        height={20}
        viewBox={`0 0 ${width - 36} 20`}
        backgroundColor={lightMode.ghostBackground}
        foregroundColor={lightMode.systemBackgroundPrimary}
      >
        <Rect width={width} height='20' />
      </ContentLoader>
    </View>
    );

  return (
    <FlatList
      data={GHOST_ITEMS}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
});
