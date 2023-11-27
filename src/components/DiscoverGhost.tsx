import React from 'react';
import ContentLoader, { Rect } from '@assos/lib/RNContentLoader';
import { Dimensions, StyleSheet, View } from 'react-native';

import { lightMode as palette } from '@assos/styles';


const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center'
  }
});

const { width, height } = Dimensions.get('window');


const line1 = {
  width,
  height: 504,
  x: 0,
  y: 0
};
const line2 = {
  width: 190,
  height: 36,
  x: 0,
  y: 20
};

const line3 = {
  width: 322,
  height: 49,
  x: 2,
  y: 10
};

const line4 = {
  width: 328,
  height: 32,
  x: 0,
  y: line3.y + line3.height + 10
};


const line5 = {
  width: 328,
  height: 32,
  x: 0,
  y: line4.y + line4.height + 10
};


export const DiscoverGhost = React.memo(() => {


  return (
    <View style={{height}}>
      <ContentLoader
        width={width}
        height={504}
        viewBox={`0 0 ${width} 504`}
        backgroundColor={palette.ghostBackground}
        foregroundColor={palette.systemBackgroundPrimary}
      >
        <Rect {...line1} />
      </ContentLoader>
      <View style={styles.alignCenter}>
        <ContentLoader
          width={190}
          height={56}
          viewBox={`0 0 190 56`}
          backgroundColor={palette.ghostBackground}
          foregroundColor={palette.systemBackgroundPrimary}
        >
          <Rect {...line2} />
        </ContentLoader>
        <ContentLoader
          width={328}
          height={163}
          viewBox={`0 0 328 163`}
          backgroundColor={palette.ghostBackground}
          foregroundColor={palette.systemBackgroundPrimary}
        >
          <Rect rx='2' ry='2' {...line3} />
          <Rect rx='2' ry='2' {...line4} />
          <Rect rx='2' ry='2' {...line5} />
        </ContentLoader>
      </View>
    </View>
  );
});
