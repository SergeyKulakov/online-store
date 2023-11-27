// tslint:disable: cyclomatic-complexity
import React, { FC, memo } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

import { fontFamily, lightMode as palette } from '@assos/styles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -4
  },
  buttonSizes: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    width: 36,
    height: 36,
    backgroundColor: palette.buttonInactive,
    overflow: 'hidden'
  },
  colorIcon: {
    borderRadius: 18,
    width: 36,
    height: 36,
    resizeMode: 'cover'
  },
  activeColorBorder: {
    borderColor: palette.systemBackgroundPopover
  },
  colorBorderIndents: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 2,
    padding: 2
  },
  colorSwatchesWrapper: {
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  nonAvailableBG: {
    backgroundColor: palette.buttonInactive
  },
  notAvailableImage: {
    opacity: 0.8
  },
  separator: {
    zIndex: 2,
    position: 'absolute',
    width: 44,
    backgroundColor: palette.separatorSecondary,
    height: 2,
    transform: [{rotate: '135deg'}]
  },
  nonWrap: {
    flexWrap: 'nowrap'
  },
  noSpace: {
    justifyContent: 'flex-start'
  },
  seeMoreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  seeMoreButtonText: {
    fontFamily,
    color: palette.textSecondary,
    lineHeight: 16,
    fontWeight: '400',
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    flexShrink: 1
  },
  colorTitle: {
    marginBottom: 15,
    marginLeft: 4,
    fontFamily,
    fontSize: 15,
    color: palette.systemBackgroundPopover
  },
  colorTitleValue: {
    fontFamily,
    fontSize: 15,
    color: palette.systemBackgroundPopover,
    fontWeight: 'bold',
    marginLeft: 5,
    textTransform: 'capitalize'
  }
});

const hitSlop = {
  top: 5,
  left: 5,
  right: 5,
  bottom: 5
};

interface ColorSwatches {
  data: any[];
  showColorTitle?: boolean;
  colorPress?: (elem: any) => void;
  onClickPlus?: () => void;
  noSpace?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  colorSwatchesWrapperStyle?: StyleProp<ViewStyle>;
  singleColorWrapper?: StyleProp<ViewStyle>;
  activeColorBorderProps?: StyleProp<ViewStyle>;
  nonAvailableBackground?: StyleProp<ViewStyle>;
  separatorStyle?: StyleProp<ViewStyle>;
  buttonSizes?: StyleProp<ImageStyle>;
  seeMoreButtonTextStyle?: StyleProp<TextStyle>;
  selectedColor?: string;
  swatchLimit?: number;
}

const text = {
  title: 'Color: '
};

const ColorSwatchesInner: FC<ColorSwatches> = props => {
  const {
    data,
    colorPress,
    noSpace,
    containerStyle,
    colorSwatchesWrapperStyle,
    singleColorWrapper,
    activeColorBorderProps,
    nonAvailableBackground,
    buttonSizes,
    separatorStyle,
    seeMoreButtonTextStyle,
    showColorTitle,
    swatchLimit,
    onClickPlus
  } = props;


  const handlePress = (elem: any) => () => {
    colorPress && colorPress(elem); // tslint:disable-line
  };

  const calcMoreColors = (swatchLimit && data?.length > swatchLimit)
    ? data?.length - swatchLimit
    : 0;

  const showPlusButton = !!calcMoreColors;
  const moreColorsText = `+ ${calcMoreColors}`;
  return (
    <View
      style={[
        styles.container,
        containerStyle
      ]}
    >
      {showColorTitle && (
        <Text
          style={styles.colorTitle}
        >
          {text.title}
          <Text
            style={styles.colorTitleValue}
          >
            {props.selectedColor || ''}
          </Text>
        </Text>
      )}
      <View style={styles.row}>
        <View
          style={[
            styles.colorSwatchesWrapper,
            colorSwatchesWrapperStyle,
            props.onClickPlus && styles.nonWrap,
            noSpace && styles.noSpace
          ]}
        >
          {data?.map((elem: any, i: number) => {
            const isActive = elem.value === props.selectedColor;

            if (props.onClickPlus && i > ((swatchLimit && swatchLimit - 1) || 4)) {
              return null;
            }

            return (
              <View
                key={i}
                style={[
                  styles.colorBorderIndents,
                  singleColorWrapper,
                  isActive && styles.activeColorBorder,
                  isActive && activeColorBorderProps
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.buttonSizes,
                    buttonSizes,
                    !elem.available && styles.nonAvailableBG,
                    !elem.available && nonAvailableBackground
                  ]}
                  disabled={elem.available === false}
                  onPress={handlePress(elem)}
                >
                  {elem.available === false && (
                    <View
                      style={[
                        styles.separator,
                        separatorStyle
                      ]}
                    />
                  )}
                  <Image
                    style={[
                      styles.buttonSizes,
                      !elem.available && styles.notAvailableImage,
                      buttonSizes
                    ]}
                    source={typeof elem.swatch === 'string' ? {
                      uri: elem.swatch
                    } : {
                      uri: elem.swatch?.uri
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        {props.onClickPlus && showPlusButton && (
          <TouchableOpacity
            style={[
              styles.seeMoreButton
            ]}
            onPress={onClickPlus}
            hitSlop={hitSlop}
          >
            <Text
              style={[
                styles.seeMoreButtonText,
                seeMoreButtonTextStyle
              ]}
            >
              {moreColorsText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const ColorSwatches = memo(ColorSwatchesInner);

export default ColorSwatches;
