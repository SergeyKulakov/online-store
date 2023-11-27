import React, { FC } from 'react';
import ContentLoader, { Rect } from '@assos/lib/RNContentLoader';
import { lightMode as palette } from '@assos/styles';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import { keyExtractor } from '@assos/helpers/list';


const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10
  }
});

const GHOST_ITEMS = [1, 2, 3];

export interface CartItemGhostProps {
  style?: ViewStyle;
}

export const SearchGhost: React.FC<CartItemGhostProps> = React.memo(props => {
  const title = {
    width: 143,
    height: 15,
    x: 0,
    y: 25
  };
  const image = {
    width: 216,
    height: 276,
    x: 0,
    y: title.y + title.height + 23
  };

  const price = {
    width: 146,
    height: 28,
    x: 0,
    y: image.y + image.height + 14
  };
  const line1 = {
    width: 128,
    height: 11,
    x: 0,
    y: price.y + price.height + 18
  };
  const line2 = {
    width: 86,
    height: 11,
    x: 0,
    y: line1.y + line1.height + 14
  };
  const line3 = {
    width: 86,
    height: 11,
    x: 0,
    y: line2.y + line2.height + 11
  };

  const renderItem: FC<any> = () => (
    <ContentLoader
      width={215}
      height={420}
      viewBox={`0 0 216 480`}
      backgroundColor={palette.ghostBackground}
      foregroundColor={palette.systemBackgroundPrimary}
    >
      <Rect rx='2' ry='2' {...title} />
      <Rect rx='2' ry='2' {...image} />
      <Rect rx='2' ry='2' {...price} />
      <Rect rx='2' ry='2' {...line1} />
      <Rect rx='2' ry='2' {...line2} />
      <Rect rx='2' ry='2' {...line3} />
    </ContentLoader>
  );


  return (
    <View style={[styles.itemContainer, props.style]}>
      <FlatList
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={GHOST_ITEMS}
        renderItem={renderItem}
      />
    </View>
  );
});
