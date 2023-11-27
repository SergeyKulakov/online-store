import { Image, KeyboardAvoidingView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './SizeGuide.styles';
import { ToggleButton } from '@brandingbrand/fscomponents';

import UserBiometricsForm from './UserBiometricsForm';
import { colors } from '@assos/styles';
import ConfirmMeasurements from './ConfirmMeasurements';
import { env } from '@brandingbrand/fsapp';
import { MeasurementsResponse } from '@assos/datasources/eyefitu/eyefitu.types';
import { i18n, keys } from '@assos/lib';

const UserInput = ({
  index,
  setIndex,
  image,
  gender,
  productNameValue,
  setSizeRecommendation
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  image: string;
  gender: string;
  productNameValue: string;
  setSizeRecommendation: any;
}) => {
  const [useMetricSystem, setUseMetricSystem] = useState(true);
  const [suggestedMeasurements, setSuggestedMeasurements] = useState<{
    gender: string;
    height: number;
    weight: number;
    detailedMeasurements: MeasurementsResponse;
  }>();

  const handleUseMetricSystem = () => {
    if (useMetricSystem) {
      setUseMetricSystem(false);
    } else {
      setUseMetricSystem(true);
    }
  };

  const uri = `${env.magento.mediaBaseURL}/${image}`;
  return (
    <KeyboardAvoidingView
      enabled
      behavior={'position'}
      keyboardVerticalOffset={120}
    >
      <View style={styles.header}>
        <Image
          source={{ uri }}
          style={{
            height: 161,
            flex: 1,
            resizeMode: 'contain',
            marginLeft: -12
          }}
        />
        {!suggestedMeasurements ? (
          <View style={{ flex: 1 }}>
            <Text style={styles.header__text}>
              {i18n.string(keys.pdp.modal.weHelpYouFind)}
            </Text>
            <View style={styles.toggleButton}>
              <Text
                style={
                  useMetricSystem
                    ? styles.toggleOption
                    : [styles.toggleOption, styles.toggleOptionActive]
                }
              >
                {i18n.string(keys.pdp.modal.IN)}
              </Text>
              <ToggleButton
                containerActiveColor={colors.h_0c0c0c}
                containerInactiveColor={colors.h_0c0c0c}
                onPress={handleUseMetricSystem}
                state={useMetricSystem}
                wrapperStyle={styles.toggleButtonWrapper}
                containerStyle={styles.toggleButtonContainer}
              />
              <Text
                style={
                  useMetricSystem
                    ? [styles.toggleOption, styles.toggleOptionActive]
                    : styles.toggleOption
                }
              >
                {i18n.string(keys.pdp.modal.CM)}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Text style={styles.header__text}>
              {i18n.string(keys.pdp.modal.confirmHeader)}
            </Text>
          </View>
        )}
      </View>

      {!suggestedMeasurements ? (
        <UserBiometricsForm
          setIndex={setIndex}
          useMetricSystem={useMetricSystem}
          gender={gender}
          setSuggestedMeasurements={setSuggestedMeasurements}
        />
      ) : (
        <ConfirmMeasurements
          useMetricSystem={useMetricSystem}
          setIndex={setIndex}
          suggestedMeasurements={suggestedMeasurements}
          // tslint:disable-next-line: no-constant-condition
          gender={(gender = 'Men' ? 'male' : 'female')}
          productNameValue={productNameValue}
          setSizeRecommendation={setSizeRecommendation}
          setSuggestedMeasurements={setSuggestedMeasurements}

        />
      )}
    </KeyboardAvoidingView>
  );
};

export default UserInput;
