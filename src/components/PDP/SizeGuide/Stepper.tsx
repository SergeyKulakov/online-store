import { View } from 'react-native';
import React from 'react';
import styles from './SizeGuide.styles';

const Stepper = ({ index }: { index: number }) => {
  const steps = [0, 1, 2];

  return (
    <View style={styles.stepperRow}>
        {steps.map(i => (
          <View
            key={i}
            style={i === index ? styles.stepperActive : styles.stepperInactive}
          />
        ))}
      </View>
  );
};

export default Stepper;
