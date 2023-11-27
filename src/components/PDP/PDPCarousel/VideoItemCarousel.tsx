import { StyleProp, View, ViewStyle } from 'react-native';
import styles from '@assos/components/PDP/PDPCarousel/PDPCarousel.styles';
import Video from 'react-native-video';
import React, { FC } from 'react';

export const VideoItemCarousel: FC<{
  videoSource: string;
  key: string;
  style?: StyleProp<ViewStyle>;
  videoStyle?: StyleProp<ViewStyle>;
}> = (
  { videoSource, key, style, videoStyle }
) => {
  return (
    <View key={key} style={[styles.carouselItem, style]}>
      <Video
        resizeMode={'cover'}
        source={{ uri: videoSource }}
        style={[styles.carouselImage, videoStyle]}
        repeat
        playWhenInactive
      />
    </View>
  );
};
