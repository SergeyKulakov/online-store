import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { PredictiveSizeResponse } from '@assos/datasources/eyefitu/eyefitu.types';
import styles from './SizeGuide.styles';
import { i18n, keys } from '@assos/lib';
import { assetsImages } from '@assos/styles';

const CTA = ({
  handleShowSizeGuide,
  useStaticSizeGuide,
  sizeRecommendation
}: {
  handleShowSizeGuide: () => void;
  useStaticSizeGuide: boolean;
  sizeRecommendation: undefined | PredictiveSizeResponse;
}) => {
  return (
    <TouchableOpacity onPress={handleShowSizeGuide} style={styles.sizeChartCTA}>
      <Image source={assetsImages.sizeChart} style={styles.sizeChartCTAIcon} />
      {useStaticSizeGuide ? (
        <Text style={styles.sizeChartCTAText}>
          {i18n.string(keys.pdp.sizeChart)}
        </Text>
      ) : (
        <Text style={styles.sizeChartCTAText}>
          {!sizeRecommendation?.recommendedSize
            ? "What's my size?"
            : `Your size is ${sizeRecommendation.recommendedSize}`}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CTA;
