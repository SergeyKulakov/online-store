import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TechnologyOverview } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { assetsImages, fonts } from '@assos/styles';

interface Props {
  OverviewArray: TechnologyOverview[];
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: fonts.maisonNeue,
    lineHeight: 18,
    letterSpacing: 0.5
  },
  arrow: {
    flex: 1,
    alignSelf: 'flex-start'
  }
});

const Carousel = ({ OverviewArray }: Props) => {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState('');

  const handleLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index === OverviewArray.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    setContent(OverviewArray[index].value);
  }, [index]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLeft} style={styles.arrow}>
        <Image source={assetsImages.backArrow} />
      </TouchableOpacity>
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity onPress={handleRight} style={styles.arrow}>
        <Image source={assetsImages.arrowRight} />
      </TouchableOpacity>
    </View>
  );
};

export default Carousel;
