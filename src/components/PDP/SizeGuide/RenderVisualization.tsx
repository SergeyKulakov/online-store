import { Image, View } from 'react-native';
import React from 'react';
import styles from './SizeGuide.styles';
import { assetsImages } from '@assos/styles';

const RenderVisualization = ({
  gender,
  bodyPlace
}: {
  gender: string;
  bodyPlace: string;
}) => {
  let image;
  switch (true) {
    case gender === 'male' && bodyPlace === 'TOPS':
      image = (
        <Image
          source={assetsImages.enTopsMale}
          height={50}
          style={styles.recommendedSizeVisualizationImage}
        />
      );
      break;
    case gender === 'male' && bodyPlace === 'BOTTOMS':
      image = (
        <Image
          source={assetsImages.enBottomsMale}
          style={styles.recommendedSizeVisualizationImage}
        />
      );
      break;
    case gender === 'female' && bodyPlace === 'TOPS':
      image = (
        <Image
          source={assetsImages.enTopsFemale}
          style={styles.recommendedSizeVisualizationImage}
        />
      );
      break;
    case gender === 'female' && bodyPlace === 'BOTTOMS':
      image = (
        <Image
          source={assetsImages.enBottomsFemale}
          style={styles.recommendedSizeVisualizationImage}
        />
      );
      break;
    default:
      break;
  }

  return <View>{image}</View>;
};

export default RenderVisualization;
