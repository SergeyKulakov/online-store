import React, { FC } from 'react';
import ContentLoader, { Rect } from '@assos/lib/RNContentLoader';
import { Dimensions, View } from 'react-native';

import CTAButton from '@assos/components/ui/CTAButton';
import { MultiCarousel } from '@brandingbrand/fscomponents';

import { CTAButtonTypes } from '@assos/components';
import { i18n, keys } from '@assos/lib';

import { lightMode as palette } from '@assos/styles';
import styles from './PDPGhost.styles';


const { width, height } = Dimensions.get('window');


const line1 = {
  width: 211,
  height: 23,
  x: 0,
  y: 0
};
const line2 = {
  width: 211,
  height: 23,
  x: 0,
  y: line1.y + line1.height + 7
};

const line3 = {
  width: 211,
  height: 23,
  x: 0,
  y: line2.y + line2.height + 7
};

const line4 = {
  width: 246,
  height: 23,
  x: 0,
  y: line3.y + line3.height + 21
};


const GHOST_ITEMS = [1, 2, 3, 4, 5];

export const PDPGhost = React.memo(() => {

  const renderGhostImage: FC<any> = () => (
   <View style={styles.imageWrapper}>
     <ContentLoader
       width={width}
       height={400}
       viewBox={`0 0 ${width} 400`}
       backgroundColor={palette.ghostBackground}
       foregroundColor={palette.systemBackgroundPrimary}
     >
       <Rect width={width} height='400' />
     </ContentLoader>
   </View>
  );


  const renderGhostInfo = () => (
    <View>
      <ContentLoader
        width={width}
        height={200}
        viewBox={`0 0 ${width} 150`}
        backgroundColor={palette.ghostBackground}
        foregroundColor={palette.systemBackgroundPrimary}
      >
        <Rect rx='2' ry='2' {...line1} />
        <Rect rx='2' ry='2' {...line2} />
        <Rect rx='2' ry='2' {...line3} />
        <Rect rx='2' ry='2' {...line4} />
      </ContentLoader>
    </View>
  );

  return (
    <View style={{height}}>
      <MultiCarousel
        itemStyle={{width}}
        dotStyle={styles.dotStyle}
        itemWidth={width}
        dotActiveStyle={styles.dotActiveStyle}
        data={GHOST_ITEMS}
        renderItem={renderGhostImage}
        itemsPerPage={1}
      />
      <View style={styles.infoWrapper}>
        {renderGhostInfo()}
        <CTAButton
          style={styles.ctaBtn}
          type={CTAButtonTypes.primary}
          styleText={styles.ctaBtnText}
          text={i18n.string(keys.pdp.addToBag)}
        />
      </View>
    </View>
  );
});
