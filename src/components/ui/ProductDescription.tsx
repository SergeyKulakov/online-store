import React, { Component } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProps
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { fontFamily, lightMode as palette } from '@assos/styles';

interface ProductDescriptionProps {
  description?: string;
  styleContainer?: StyleProp<ViewProps>;
  title?: string;
  styleTitle?: StyleProp<TextStyle>;
  marginBottomTitle?: number | string;
  visibleTextHeight: number;
}

interface ProductDescriptionState {
  isMore: boolean;
  fullNumberOfLines: number;
  height: number;
}

const text = {
  title: 'Product Details',
  learnMore: 'Learn More',
  readLess: 'Read Less'
};

const style = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 30
  },
  title: {
    fontFamily,
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: '#151515',
    marginBottom: 20
  },
  description: {
    fontFamily,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    backgroundColor: 'transparent'
  },
  linearGradient: {
    position: 'relative',
    top: -50,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  readMeContainer: {
    position: 'absolute',
    bottom: 1,
    left: 0,
    paddingHorizontal: 14.5,
    paddingVertical: 8,
    backgroundColor: palette.buttonTertiary
  },
  readMe: {
    fontFamily,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: 1,
    color: palette.textPrimary
  }
});

class ProductDescription extends Component<ProductDescriptionProps, ProductDescriptionState> {
  state: ProductDescriptionState = {
    fullNumberOfLines: this.props.description?.length || 0,
    isMore: false,
    height: 0
  };

  onReadMore = (): void => {
    this.setState({isMore: !this.state.isMore});
  }

  onLayout = (event: any) => {
    this.setState({ height: event.nativeEvent.layout.height });
  }

  sanitizeDescription = (description: string) => {
    const breakTagRegex = /(<br\s*\/?>)/ig;
    const hexaRegex = /(_x[0-9A-F]*_)/ig;
    return description
      .replace(breakTagRegex, '\n')
      .replace(hexaRegex, ' ')
      .replace(/[^\S\r\n]{2,}/ig, ' ');
  }


  render(): JSX.Element | null {
    const {
      description,
      styleContainer,
      title,
      styleTitle,
      visibleTextHeight
    } = this.props;
    if (!description) {
      return null;
    }

    const { fullNumberOfLines, isMore, height } = this.state;
    return (
      <View
        style={[
          style.container,
          styleContainer
        ]}
      >
        <Text
          style={[
            style.title,
            styleTitle
          ]}
        >
          {title ?? text.title}
        </Text>
        <Text
          style={[
            style.description
          ]}
          numberOfLines={isMore ? fullNumberOfLines : 4}
          onLayout={this.onLayout}
        >
          {this.sanitizeDescription(description)}
        </Text>
        {height > visibleTextHeight && (
          <LinearGradient
            colors={['rgba(255, 255, 255, .6)', '#fff']}
            style={[
              style.linearGradient,
              {
                zIndex: isMore ? -1 : 1
              }
            ]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
          >
            <TouchableOpacity
              style={style.readMeContainer}
              activeOpacity={0.7}
              onPress={this.onReadMore}
            >
              <Text style={style.readMe}>{isMore ? text.readLess : text.learnMore}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    );
  }
}

export default ProductDescription;
