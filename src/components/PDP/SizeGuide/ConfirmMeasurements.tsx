import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { Dispatch, useState } from 'react';
import styles from './SizeGuide.styles';
import CTAButton from '@assos/components/ui/CTAButton';
import { AsyncStorageKeys, i18n, keys, setStorageValue } from '@assos/lib';
import { eyefituController } from '@assos/datasources/eyefitu';
import { measurementTools } from './helpers';
import { MeasurementsResponse } from '@assos/datasources/eyefitu/eyefitu.types';

const ConfirmMeasurements = ({
  setIndex,
  useMetricSystem,
  suggestedMeasurements,
  gender,
  productNameValue,
  setSizeRecommendation,
  setSuggestedMeasurements

}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  useMetricSystem: boolean;
  suggestedMeasurements: {
    gender: string;
    height: number;
    weight: number;
    detailedMeasurements: MeasurementsResponse;
  };
  gender: string;
  productNameValue: string;
  setSizeRecommendation: any;
  setSuggestedMeasurements: Dispatch<any>;
}) => {
  const [chest, setChest] = useState(
    suggestedMeasurements.detailedMeasurements.BUST_CIRCUMFERENCE.toString()
  );

  const chestInches = Math.round(
    measurementTools.convertCmToIn(Number(chest))
  ).toString();
  const handleChangeChest = (value: string) => {
    if (useMetricSystem) {
      return setChest(value);
    }

    const inches = Number(value);
    return setChest(measurementTools.convertInToCm(inches).toString());
  };

  const [waist, setWaist] = useState(
    suggestedMeasurements.detailedMeasurements.WAIST_CIRCUMFERENCE.toString()
  );
  const waistInches = Math.round(
    measurementTools.convertCmToIn(Number(waist))
  ).toString();
  const handleChangeWaist = (value: string) => {
    if (useMetricSystem) {
      return setWaist(value);
    }
    const inches = Number(value);
    return setWaist(measurementTools.convertInToCm(inches).toString());
  };

  const [hip, setHip] = useState(
    suggestedMeasurements.detailedMeasurements.HIP_CIRCUMFERENCE.toString()
  );

  const hipInches = Math.round(
    measurementTools.convertCmToIn(Number(hip))
  ).toString();
  const handleChangeHip = (value: string) => {
    if (useMetricSystem) {
      return setHip(value);
    }
    const inches = Number(value);
    return setHip(measurementTools.convertInToCm(inches).toString());
  };

  const handleGoBack = () => {
    setIndex(0);
    setSuggestedMeasurements(undefined);
  };

  const handleSubmit = () => {
    const confirmedMeasurements = {
      ...suggestedMeasurements,
      detailedMeasurements: {
        ...suggestedMeasurements.detailedMeasurements,
        BUST_CIRCUMFERENCE: Number(chest),
        WAIST_CIRCUMFERENCE: Number(waist),
        HIP_CIRCUMFERENCE: Number(hip)
      }
    };
    // console.log(confirmedMeasurements)
    setStorageValue(
      AsyncStorageKeys.DetailedMeasurements,
      confirmedMeasurements
    ).catch();

    eyefituController
      .getSizeRecommendation({
        confirmedMeasurements,
        productNameValue
      })
      .then(setSizeRecommendation)
      .catch();

    setIndex(2);
  };

  if (useMetricSystem) {
    return (
      <ScrollView>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.chest)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={chest}
              onChangeText={setChest}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.cm)}
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.waist)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={waist}
              onChangeText={setWaist}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.cm)}
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.hip)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={hip}
              onChangeText={setHip}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.cm)}
            </Text>
          </View>
        </View>
        <Text style={[styles.footer, styles.footerConfirm]}>
          {i18n.string(keys.pdp.modal.confirmPrompt)}
        </Text>
        <CTAButton
          text={i18n.string(keys.pdp.modal.seeYourSize)}
          handleOnPress={handleSubmit}
        />
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.startOverText}>
            {i18n.string(keys.pdp.modal.back)}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.chest)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={chestInches}
              onChangeText={handleChangeChest}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.in)}
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.waist)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={waistInches}
              onChangeText={handleChangeWaist}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.in)}
            </Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.userInput__title}>
            {i18n.string(keys.pdp.modal.hip)}
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.userInput}
              keyboardType='numeric'
              value={hipInches}
              onChangeText={handleChangeHip}
            />
            <Text style={styles.userInput__label}>
              {i18n.string(keys.pdp.modal.in)}
            </Text>
          </View>
        </View>
        <Text style={[styles.footer, styles.footerConfirm]}>
          {i18n.string(keys.pdp.modal.confirmPrompt)}
        </Text>
        <CTAButton
          text={i18n.string(keys.pdp.modal.seeYourSize)}
          handleOnPress={handleSubmit}
        />
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.startOverText}>
            {i18n.string(keys.pdp.modal.back)}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};

export default ConfirmMeasurements;
