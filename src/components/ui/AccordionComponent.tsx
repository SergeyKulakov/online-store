import React, { FunctionComponent } from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import { Accordion } from '@brandingbrand/fscomponents';

import { fontFamily, lightMode as palette} from '@assos/styles';

const styles = StyleSheet.create({
  accordionsGroup: {
    paddingTop: 30
  },
  accordionContainer: {
    borderColor: palette.separatorPrimary,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 5
  },
  reviewsAccordionWrap: {
    marginTop: -1
  },
  accordionTouchControl: {
    height: 80
  },
  accordionOpenArrowIcon: {
    width: 7,
    height: 14,
    transform: [{rotate: '90deg'}]
  },
  accordionCloseArrowIcon: {
    width: 7,
    height: 14
  },
  accordionTitle: {
    fontSize: 16,
    lineHeight: 18,
    color: palette.textPrimary,
    letterSpacing: 0.5,
    fontFamily
  },
  productDescription: {
    lineHeight: 18,
    color: palette.textPrimary,
    paddingBottom: 10,
    fontFamily
  }
});

const arrowRight = require('@assets/icons/iconArrow.png');

interface Item {
  title: string;
  detailsText?: string;
}

interface AccordionComponentProps {
  items?: Item[];
  icon?: ImageURISource;
  closeIcon?: ImageURISource;
  renderContent?: (item?: Item) => JSX.Element;

  // Styles
  style?: StyleProp<ViewStyle>;
  accordionContainer?: StyleProp<ViewStyle>;
  accordionTouchControl?: StyleProp<ViewStyle>;
  regularWithSalePriceStyle?: StyleProp<TextStyle>;
  iconFormat?: 'image' | 'plusminus' | 'arrow';
  accordionCloseArrowIconStyle?: StyleProp<ImageStyle>;
  accordionOpenArrowIconStyle?: StyleProp<ImageStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  accordionTitleStyle?: StyleProp<TextStyle>;
  productDescriptionStyle?: StyleProp<TextStyle>;
  plusMinusStyle?: StyleProp<TextStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<ViewStyle>;
  iconPress?: () => void;
  iconUrl?: ImageSourcePropType;
}

const data = [
  {
    title: 'Title'
  },
  {
    title: 'Title'
  }
];

const renderProductAttributes = (props: AccordionComponentProps) =>
  (item: Item, ind: number, arr: Item[]) => {
    const {
      accordionContainer,
      accordionTouchControl,
      icon,
      accordionCloseArrowIconStyle,
      accordionOpenArrowIconStyle,
      accordionTitleStyle,
      productDescriptionStyle,
      plusMinusStyle,
      closeIcon,
      iconFormat,
      contentStyle,
      titleContainerStyle,
      titleStyle,
      renderContent
    } = props;

    const isLast = arr.length === (ind + 1);

    return (
      <View style={isLast && styles.reviewsAccordionWrap} key={ind}>
        <Accordion
          style={[styles.accordionContainer, accordionContainer]}
          titleTouchStyle={[styles.accordionTouchControl, accordionTouchControl]}
          iconFormat={iconFormat || 'image'}
          openIconImage={icon || arrowRight}
          openIconStyle={[styles.accordionOpenArrowIcon, accordionOpenArrowIconStyle]}
          closedIconImage={closeIcon || arrowRight}
          closedIconStyle={[styles.accordionCloseArrowIcon, accordionCloseArrowIconStyle]}
          contentStyle={[{width: '100%'}, contentStyle]}
          plusMinusStyle={plusMinusStyle}
          titleContainerStyle={titleContainerStyle}
          titleStyle={titleStyle}
          title={(
            <Text style={[styles.accordionTitle, accordionTitleStyle]}>
              {item.title}
            </Text>
          )}
          content={ !!renderContent ? renderContent(item) : (
            <Text
              style={[
                styles.productDescription,
                productDescriptionStyle,
                !item.detailsText && {paddingBottom: 20}
              ]}
            >
              {item.detailsText}
            </Text>
          )}
        />
      </View>
    );
  };


export const AccordionComponent: FunctionComponent<AccordionComponentProps> = React.memo(props => {
  const { items, style } = props;
  const activeData = (items && items.length > 0) ? items : data;
  return (
    <View style={[styles.accordionsGroup, style]}>
      {activeData.map(renderProductAttributes(props))}
    </View>
  );
});
