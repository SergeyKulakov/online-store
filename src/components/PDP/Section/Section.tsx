import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import styles from './Section.styles';
import {assetsImages} from '@assos/styles';


interface SectionProps {
  title: string;
  icon: ImageSourcePropType;
}

const Section = (props: SectionProps) => (
  <View style={styles.sectionRow}>
    <Image style={styles.sectionIcon} source={props.icon} />
    <Text style={styles.sectionText}>{props.title}</Text>
    <View style={styles.plusIconWrapper}>
      <Image source={assetsImages.plus} />
    </View>
  </View>
);

export default Section;

