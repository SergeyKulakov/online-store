import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC, useMemo, useRef, useState } from 'react';
import { createTechnologyOverviewArray } from './helpers';
import { TechnologyOverview as TechItem } from './types';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { assetsImages, fonts } from '@assos/styles';
import { i18n, keys } from '@assos/lib';
import Svg, { Path, SvgProps } from 'react-native-svg';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 24,
    marginBottom: 72
  },
  technologyDetailsFabricImage: {
    marginTop: 72,
    height: 222,
    width: '100%'
  },
  header__eyebrow: {
    paddingHorizontal: 30,
    color: 'white',
    fontFamily: fonts.maisonNeue,
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  header: {
    paddingHorizontal: 30,
    color: 'white',
    fontFamily: fonts.maisonNeue,
    fontSize: 22,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  carouselContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  content: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.maisonNeue,
    lineHeight: 18,
    letterSpacing: 0.5
  },
  arrow: {
    flex: 0,
    width: 30,
    height: '100%',
    alignItems: 'center'
  }
});

interface ArrowProps extends SvgProps {
  isDisabled?: boolean;
}

const RightArrow = ({isDisabled, ...props}: ArrowProps) => {
  const fillColor = isDisabled ? '#D6D6D6' : '#FFFFFF';
  return (
    <Svg
      width={6}
      height={11}
      viewBox='0 0 6 11'
      fill='none'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d={'M6 5.499L1.115.62a.455.455 0 10-.642.644l4.24 ' +
        '4.234-4.24 4.236a.455.455 0 00.642.644L6 5.499z'}
        fill={fillColor}
      />
    </Svg>
  );
};

const LeftArrow = ({isDisabled, ...props}: ArrowProps) => {
  const fillColor = isDisabled ? '#D6D6D6' : '#FFFFFF';
  return (
    <Svg
      width={6}
      height={11}
      viewBox='0 0 6 11'
      fill='none'
      {...props}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d={'M0 5.501l4.885 4.878a.455.455 0 10.642-.644l-4.24-4.234 ' +
        '4.24-4.236A.455.455 0 004.886.62L0 5.501z'}
        fill={fillColor}
      />
    </Svg>
  );
};

const TechnologyOverview: FC<{ product: ProductControllersTypes.Product }> = ({
  product
}) => {
  const technologyOverviewArray = useMemo(
    () => createTechnologyOverviewArray(product),
    [product._id]
  );
  const [index, setIndex] = useState<number>(0);
  const carouselRef = useRef<FlatList<TechItem>>(null);

  const handleLeftPress = () => {
    if (index === 0) {
      return;
    }
    carouselRef.current?.scrollToIndex({
      index: index - 1
    });
    setIndex(i => i - 1);
  };

  const handleRightPress = () => {
    if (index === technologyOverviewArray.length - 1) {
      return;
    }
    carouselRef.current?.scrollToIndex({
      index: index + 1
    });
    setIndex(i => i + 1);
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const ind = e.nativeEvent.contentOffset.x / (SCREEN_WIDTH - 60);
    const roundedIndex = Math.round(ind);
    setIndex(roundedIndex);
  };

  const renderItem = ({item, index}: {item: TechItem; index: number }) => {
    return (
      <View style={{width: SCREEN_WIDTH - 60}}>
        <Text style={styles.content}>{item.value}</Text>
      </View>
    );
  };

  const keyExtractor = (item: TechItem, index: number) =>
    `${item.value}_${index}`;

  if (technologyOverviewArray.length > 0) {
    return (
      <View>
        <Image
          source={assetsImages.technologyDetailsFabric}
          style={styles.technologyDetailsFabricImage}
        />
        <View style={styles.container}>
          <Text style={styles.header__eyebrow}>
            {i18n.string(keys.technologyDetails.header__eyebrow)}
          </Text>
          <Text style={styles.header}>
            {i18n.string(keys.technologyDetails.header)}
          </Text>
          <View style={styles.carouselContainer}>
            <TouchableOpacity
              style={styles.arrow}
              onPress={handleLeftPress}
              disabled={index === 0}
            >
              <LeftArrow isDisabled={index === 0} />
            </TouchableOpacity>
            <FlatList
              ref={carouselRef}
              data={technologyOverviewArray}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              scrollEventThrottle={100}
              snapToInterval={SCREEN_WIDTH - 60}
              snapToAlignment='center'
              decelerationRate='fast'
              bounces={false}
              style={{flex: 1}}
            />
            <TouchableOpacity
              style={styles.arrow}
              onPress={handleRightPress}
              disabled={index === technologyOverviewArray.length - 1}
            >
              <RightArrow isDisabled={index === technologyOverviewArray.length - 1} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default TechnologyOverview;
