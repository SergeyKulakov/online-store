import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ReviewIndicator } from '@brandingbrand/fscomponents';

import { fontFamily, lightMode as palette } from '@assos/styles';

interface CustomReviewIndicatorProps {
  rating?: number;
  ratingCount?: number;
}

const image = {
  star: require('@assets/icons/star.png'),
  halfStar: require('@assets/icons/half-star.png'),
  emptyStar: require('@assets/icons/empty-star.png')
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewIndicator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleCount: {
    fontFamily,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  fullStar: {
    width: 13,
    height: 13,
    marginRight: 3
  },
  halfStar: {
    width: 17,
    height: 17,
    marginRight: 2,
    marginLeft: -1,
    marginBottom: -1
  },
  emptyStar: {
    width: 13,
    height: 13,
    marginRight: 3
  }
});

export class CustomReviewIndicator extends Component<CustomReviewIndicatorProps, any> {


  renderFullStar = (): JSX.Element => {
    return (
      <Image style={style.fullStar} source={image.star} />
    );
  }

  renderHalfStar = (): JSX.Element => {
    return (
      <Image
        style={style.halfStar}
        source={image.halfStar}
      />
    );
  }

  renderEmptyStar = (): JSX.Element => {
    return (
      <Image style={style.emptyStar} source={image.emptyStar} />
    );
  }

  render(): JSX.Element {
    const { rating, ratingCount } = this.props;

    return (
      <View style={style.container}>
        <ReviewIndicator
          style={style.reviewIndicator}
          value={rating || 0}
          renderFullStar={this.renderFullStar}
          renderHalfStar={this.renderHalfStar}
          renderEmptyStar={this.renderEmptyStar}
        />
        <Text style={style.titleCount}>{ratingCount || 0}</Text>
      </View>
    );
  }
}
