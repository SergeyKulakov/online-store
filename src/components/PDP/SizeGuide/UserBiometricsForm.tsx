import CTAButton from '@assos/components/ui/CTAButton';
import { eyefituController } from '@assos/datasources/eyefitu';
import { i18n, keys } from '@assos/lib';
import React, { Dispatch, useState } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';
import { getAgeFromRange, measurementTools } from './helpers';
import styles from './SizeGuide.styles';

const UserBiometricsForm = ({
  useMetricSystem,
  setIndex,
  gender,
  setSuggestedMeasurements
}: {
  useMetricSystem: boolean;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  gender: string;
  setSuggestedMeasurements: Dispatch<any>;
}) => {
  const [userHeight, setUserHeight] = useState<number>();
  const [userWeight, setUserWeight] = useState<number>();
  const [userAge, setUserAge] = useState<number>();

  const [feet, setFeet] = useState<number>();
  const [inches, setInches] = useState<number>();
  const handleChangeFeet = (value: string) => {
    setUserHeight(
      measurementTools.convertToMetricHeight({
        feet: Number(value) || 0,
        inches: inches || 0
      })
    );
    return setFeet(Number(value));
  };
  const handleChangeInches = (value: string) => {
    setUserHeight(
      measurementTools.convertToMetricHeight({
        feet: feet || 0,
        inches: Number(value) || 0
      })
    );
    return setInches(Number(value));
  };
  const handleChangeLbs = (value: string) => {
    const kilograms = measurementTools.convertLbsToKg(Number(value));
    return setUserWeight(kilograms);
  };
  const handleUserHeight = (value: string) => setUserHeight(Number(value));
  const handleUserWeight = (value: string) => setUserWeight(Number(value));
  const handleUserAge = (value: string) => {
    const formattedAge = getAgeFromRange(Number(value));
    setUserAge(formattedAge);
  };
  const handleSubmit = () => {
    if (!userHeight || !userAge || !userWeight) {
      return Alert.alert('ERROR');
    }
    // tslint:disable-next-line: no-constant-condition
    const genderValue = (gender = 'Men' ? 'male' : 'female');
    eyefituController
      .getPredictedMeasurements({
        gender: genderValue,
        height: userHeight,
        age: userAge,
        weight: userWeight
      })
      .then(res =>
        setSuggestedMeasurements({
          gender: genderValue,
          height: userHeight,
          age: userAge,
          weight: userWeight,
          detailedMeasurements: res
        })
      )
      .catch();

    setIndex(1);
  };

  return (
    <ScrollView>
      {useMetricSystem ? (
        <View>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.height)}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleUserHeight}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.cm)}
              </Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.weight)}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleUserWeight}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.kg)}
              </Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.age)}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleUserAge}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.years)}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.height)}
            </Text>
            <View style={styles.inputContainer__feet}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleChangeFeet}
                maxLength={1}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.ft)}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleChangeInches}
                maxLength={2}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.in)}
              </Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.weight)}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleChangeLbs}
                maxLength={3}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.lb)}
              </Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.userInput__title}>
              {i18n.string(keys.pdp.modal.age)}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.userInput}
                keyboardType='numeric'
                onChangeText={handleUserAge}
                maxLength={3}
              />
              <Text style={styles.userInput__label}>
                {i18n.string(keys.pdp.modal.years)}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
      <Text style={styles.footer}>
        {i18n.string(keys.pdp.modal.ageHasAnImpact)}
      </Text>
      <CTAButton
        text='NEXT: REVIEW MEASUREMENTS'
        handleOnPress={handleSubmit}
      />
    </ScrollView>
  );
};

export default UserBiometricsForm;
