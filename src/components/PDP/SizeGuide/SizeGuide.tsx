import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import IconButton from '@assos/components/ui/IconButton';
import { assetsImages, fonts } from '@assos/styles';
import UserInput from './UserInput';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { checkForStaticCategoryLevel2Value } from './helpers';
import {
  AsyncStorageKeys,
  deleteStorageValue,
  getStoredMeasurements,
  i18n,
  keys
} from '@assos/lib';
import { eyefituController } from '@assos/datasources/eyefitu';
import RecommendedSize from './RecommendedSize';
import { PredictiveSizeResponse } from '@assos/datasources/eyefitu/eyefitu.types';
import CTA from './CTA';
import Stepper from './Stepper';
import StaticSizeGuide from './StaticSizeGuide';
import styles from './SizeGuide.styles';

const SizeGuide = ({
  product
}: {
  product: ProductControllersTypes.Product;
}) => {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [index, setIndex] = useState(0);
  const [sizeRecommendation, setSizeRecommendation] =
    useState<PredictiveSizeResponse>();
  const [useStaticSizeGuide, setUseStaticSizeGuide] = useState(true);

  const handleShowSizeGuide = () => {
    if (showSizeGuide) {
      return setShowSizeGuide(false);
    }
    if (index === 1) {
      setIndex(0);
      setShowSizeGuide(true);
    } else {
      setShowSizeGuide(true);
    }
  };

  const handleStaticSizeGuide = () => {
    setUseStaticSizeGuide(
      checkForStaticCategoryLevel2Value(
        product.attributes.category_level_2.value
      )
    );
  };

  const handleStartOver = () => {
    deleteStorageValue(AsyncStorageKeys.DetailedMeasurements)
      .then(() => {
        setIndex(0);
        setSizeRecommendation(undefined);
      })
      .catch();
  };

  useEffect(() => {
    handleStaticSizeGuide();
    getStoredMeasurements()
      .then(res => {
        if (res) {
          eyefituController
            .getSizeRecommendation({
              confirmedMeasurements: res,
              productNameValue: product.attributes.category_level_2.value
            })
            .then(setSizeRecommendation)
            .catch();

          setIndex(2);
        }
      })
      .catch();
  }, [product]);

  return (
    <View>
      <CTA
        handleShowSizeGuide={handleShowSizeGuide}
        useStaticSizeGuide={useStaticSizeGuide}
        sizeRecommendation={sizeRecommendation}
      />
      <Modal
        visible={showSizeGuide}
        presentationStyle='formSheet'
        animationType='slide'
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 18,
            paddingHorizontal: 6
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontFamily: fonts.orbitron,
              fontWeight: '500'
            }}
          >
            {i18n.string(keys.pdp.modal.title)}
          </Text>
          <IconButton
            image={assetsImages.close}
            style={{ position: 'absolute', right: 12 }}
            // tslint:disable-next-line: jsx-no-lambda
            onPress={() => {
              handleShowSizeGuide();
            }}
          />
        </View>

        {!useStaticSizeGuide ? (
          <ScrollView style={{ paddingHorizontal: 20 }}>
            {sizeRecommendation ? (
              <RecommendedSize
                product={product}
                sizeRecommendation={sizeRecommendation}
                gender={
                  product.attributes.gender.value === 'Men' ? 'male' : 'female'
                }
                handleShowSizeGuide={handleShowSizeGuide}
                handleStartOver={handleStartOver}
              />
            ) : (
              <UserInput
                index={index}
                setIndex={setIndex}
                image={product.assets.placeholders.image}
                gender={
                  product.attributes.gender.value === 'Men' ? 'male' : 'female'
                }
                productNameValue={product.attributes.category_level_2.value}
                setSizeRecommendation={setSizeRecommendation}
              />
            )}
            {index === 0 && (
              <TouchableOpacity onPress={handleShowSizeGuide}>
                <Text style={styles.startOverText}>
                  {i18n.string(keys.pdp.modal.exitSizeChart)}
                </Text>
              </TouchableOpacity>
            )}
            <Stepper index={index} />
          </ScrollView>
        ) : (
          <StaticSizeGuide product={product} />
        )}
      </Modal>
    </View>
  );
};

export default SizeGuide;
