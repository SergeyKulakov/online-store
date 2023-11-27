import React from 'react';
import { Text, View } from 'react-native';
import styles from './SizeGuide.styles';

interface OptionProps {
  sizeLabel: string;
  isActive: boolean;
}

export const Size = ({ sizeLabel, isActive }: OptionProps) => {
  return (
    <View style={[styles.sizeCta]}>
      <View style={[styles.ctaInner, isActive ? styles.activeInner : null]}>
        <Text
          style={[styles.sizeOptionText, isActive ? styles.activeText : null]}
        >
          {sizeLabel}
        </Text>
      </View>
    </View>
  );
};
