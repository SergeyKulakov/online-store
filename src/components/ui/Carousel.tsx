import React, { FC, memo } from 'react';
import {
  Dimensions,
  Image,
  ImageStyle,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { MultiCarousel } from '@brandingbrand/fscomponents';

import { fontFamily, lightMode as palette} from '@assos/styles';

import CTAButton from './CTAButton';
import { CarouselSingleItem } from './CarouselSingleItem';
import { CarouselCustomerPhotosItem } from './CarouselCustomerPhotosItem';

interface CarouselPropsTypes {
  products: CommerceTypes.Product[];
  showToCategoryButton: boolean;
  imageWidth: number;
  imageHeight: number;
  imageListWrapperPadding: number;
  spaceBetweenImages: number;
  title: string;
  titleStyles?: StyleProp<TextStyle>;
  priceTextStyle?: StyleProp<TextStyle>;
  productNameTextStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  singleItemWrapper?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  heartButtonStyle?: StyleProp<ViewStyle>;
  heartIconStyle?: StyleProp<ImageStyle>;
}

export interface CarouselItemProps extends CarouselPropsTypes {
  imageWidth: number;
  imageHeight: number;
  product: CommerceTypes.Product;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 82,
    position: 'relative'
  },
  title: {
    fontFamily,
    fontSize: 23,
    letterSpacing: 0.5,
    lineHeight: 27,
    marginBottom: 27,
    color: palette.textPrimary
  },
  withoutMargin: {
    marginBottom: 0
  },
  itemWrapper: {
    width: '100%',
    backgroundColor: palette.systemBackgroundPrimary
  },
  itemImage: {
    alignSelf: 'flex-start',
    resizeMode: 'cover',
    backgroundColor: palette.systemBackgroundPrimary,
    marginBottom: 20
  },
  productName: {
    fontFamily,
    fontSize: 15,
    letterSpacing: 0.5,
    marginBottom: 8,
    lineHeight: 22
  },
  heart: {
    width: 18,
    height: 19,
    resizeMode: 'contain'
  },
  heartWrapper: {
    position: 'absolute',
    top: 10,
    right: 30,
    width: 35,
    height: 35,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.systemBackgroundPrimary,
    zIndex: 2
  },
  allCategory: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
    borderColor: palette.textPrimary,
    borderWidth: 1,
    marginTop: 42,
    zIndex: 5
  },
  goToCategoryText: {
    fontFamily,
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 1,
    color: palette.textPrimary
  },
  colorsSwatches: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  colorSeparator: {
    width: 37
  },
  colorWrapper: {
    padding: 2,
    marginHorizontal: 4
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: palette.separatorPrimary,
    alignItems: 'center',
    paddingBottom: 22,
    paddingTop: 44
  },
  innerButton: {
    width: 79,
    height: 31,
    backgroundColor: '#EFEFEF',
    borderWidth: 0
  },
  CTAButtonsText: {
    fontSize: 13,
    letterSpacing: 0.5,
    color: palette.textPrimary
  }
});

interface CarouselPropsTypes {
  products: CommerceTypes.Product[];
  showToCategoryButton: boolean;
  imageWidth: number;
  imageHeight: number;
  imageListWrapperPadding: number;
  spaceBetweenImages: number;
  title: string;
  titleStyles?: StyleProp<TextStyle>;
  priceTextStyle?: StyleProp<TextStyle>;
  productNameTextStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  singleItemWrapper?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  heartButtonStyle?: StyleProp<ViewStyle>;
  heartIconStyle?: StyleProp<ImageStyle>;
  customerPhotos?: boolean;
  tittleButton?: string;
  buttonType?: 'text' | 'arrow';
  swatchLimit?: number;
}

const arrowIcon = require('@assets/icons/iconArrow.png');

const Carousel: FC<CarouselPropsTypes> = memo(props => {
  const {
    titleStyles,
    imageWidth,
    imageListWrapperPadding,
    spaceBetweenImages,
    containerStyle,
    customerPhotos,
    showToCategoryButton,
    tittleButton,
    buttonType
  } = props;

  const screenWidth = Dimensions.get('screen').width;
  const paddingValue = imageListWrapperPadding * 2;
  const spaceBetweenImagesValue = spaceBetweenImages * 2;
  const itemPerPage = (screenWidth - spaceBetweenImagesValue - paddingValue) / imageWidth;

  const renderItem: ListRenderItem<CommerceTypes.Product> = ({ item }) => {
    if (customerPhotos) {
      const imageStyle: StyleProp<ImageStyle> = [
        props.imageStyle,
        {
          height: props.imageHeight,
          width: props.imageWidth
        }
      ];
      return (
        <CarouselCustomerPhotosItem
          product={item}
          imageStyle={imageStyle}
          singleItemWrapper={props.singleItemWrapper}
          imageHeight={props.imageHeight}
          imageWidth={props.imageWidth}
        />
      );
    }
    return <CarouselSingleItem product={item} {...props} />;
  };

  const renderHeader = () => {
    return (
      <Text
        style={[styles.title, titleStyles]}
      >
        {props.title}
      </Text>
    );
  };

  const renderHeaderPlusTopButton = () => {
    // TODO implement action on Press Header Button
    const handleOnPress = () => {
      // TODO implement action on Press Header Button
    };

    const renderTextButton = () => {
      return (
          <CTAButton
            style={styles.innerButton}
            text={tittleButton}
            styleText={styles.CTAButtonsText}
            handleOnPress={handleOnPress}
          />
      );
    };

    const renderArrowButton = () => {
      return (
       <TouchableOpacity
         onPress={handleOnPress}
       >
         <Image source={arrowIcon} />
       </TouchableOpacity>
      );
    };

    return (
      <View style={styles.headerContainer}>
          <Text
            style={[
              styles.title,
              styles.withoutMargin,
              titleStyles
            ]}
          >
            {props.title}
          </Text>
        {
          buttonType === 'arrow'
            ? renderArrowButton()
            : renderTextButton()
        }
      </View>
    );
  };

  const noRender = () => null;

  return (
    <View
      style={[
        styles.container,
        containerStyle
      ]}
    >
      {showToCategoryButton ? renderHeaderPlusTopButton() : renderHeader()}
      <MultiCarousel
        data={props.products}
        renderItem={renderItem}
        renderPageIndicator={noRender}
        itemsPerPage={itemPerPage || 1}
      />
    </View>
  );
});

export default Carousel;
