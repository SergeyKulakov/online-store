import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { i18n, keys } from '@assos/lib';
import styles from './SizeGuide.styles';
import RenderVisualization from './RenderVisualization';
import CTAButton from '@assos/components/ui/CTAButton';
import { Size } from './Size';
import { cleanSizeLabel } from './helpers';


const RecommendedSize = ({
  sizeRecommendation,
  gender,
  product,
  handleShowSizeGuide,
  handleStartOver
}: {
  sizeRecommendation: {
    bodyPlace: string;
    recommendedSize: string | null;
    extended: { label: string }[];
  };
  gender: string;
  product: any;
  handleShowSizeGuide: () => void;
  handleStartOver: () => void;
}) => {
  return (
    <View>
      <RenderVisualization
        gender={gender}
        bodyPlace={sizeRecommendation.bodyPlace}
      />
      <Text style={styles.recommendedSizeText}>
        {i18n.string(keys.pdp.modal.yourRecommendedSize, {
          size: sizeRecommendation.recommendedSize ?? ''
        })}
      </Text>
      <View style={styles.sizesContainer}>
        {sizeRecommendation.extended.map(size =>
          size ? (
            <Size
              key={size.label}
              sizeLabel={cleanSizeLabel(size.label)}
              isActive={size.label === sizeRecommendation.recommendedSize}
            />
          ) : null
        )}
      </View>
      <CTAButton
        text={i18n.string(keys.pdp.modal.continueShopping)}
        handleOnPress={handleShowSizeGuide}
      />
      <TouchableOpacity onPress={handleStartOver}>
        <Text style={styles.startOverText}>
          {i18n.string(keys.pdp.modal.startOver)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecommendedSize;
