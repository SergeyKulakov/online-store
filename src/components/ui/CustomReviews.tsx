import React, { Component, ReactElement } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Accordion } from '@brandingbrand/fscomponents';
import { CommerceTypes, ReviewTypes } from '@brandingbrand/fscommerce';

import { fontFamily, lightMode as palette } from '@assos/styles';

import { Link } from './Link';
import { ReviewsList } from './ReviewsList';
import { CustomReviewIndicator } from './CustomReviewIndicator';

interface CustomReviewProps {
  reviews: ReviewTypes.Review[];
  type: number;
  renderOnlyTitle?: boolean;
  reviewsRating?: number;
  reviewsCount?: number;
  styleContainer?: StyleProp<ViewStyle>;
  mention?: string;
  onPress?: () => void;
}

interface CustomReviewState {
  sortBy: string;
  reviews: ReviewTypes.Review[];
  customFeedback: Feedback;
}

export interface Feedback {
  [id: string]: number;
}

const image = {
  star: require('@assets/icons/star.png'),
  halfStar: require('@assets/icons/half-star.png'),
  emptyStar: require('@assets/icons/empty-star.png'),
  iconArrow: require('@assets/icons/iconArrow.png'),
  iconClose: require('@assets/icons/iconClose.png')
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  accordionContainer: {
    paddingTop: 10,
    paddingBottom: 10
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontFamily,
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary,
    marginRight: 6
  },
  titleCount: {
    fontFamily,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.textPrimary
  },
  openIconStyle: {
    transform: [{ rotate: '90deg' }]
  },
  sortByContainer: {
    marginBottom: 40
  }
});

export enum ReviewType {
  title,
  link,
  accordion,
  normal
}

class CustomReviews extends Component<CustomReviewProps, CustomReviewState> {
  constructor(props: CustomReviewProps) {
    super(props);

    this.state = {
      sortBy: 'highestrating',
      reviews: this.props.reviews,
      customFeedback: {}
    };
  }

  componentDidMount(): void {
    this.filterByMention(this.props.mention);
  }

  componentDidUpdate(prevProps: Readonly<CustomReviewProps>): void {
    if (prevProps.mention !== this.props.mention) {
      this.filterByMention(this.props.mention);
    }
  }

  filterByMention = (mention?: string): void => {
    // TODO Change logic after dell moc data
    switch (mention) {
      case 'View All': {
        this.setState({ reviews: this.props.reviews });
        break;
      }
      case 'Highly recommended': {
        const filteredReviews = this.props.reviews.filter(el => el.rating >= 4);
        this.setState({ reviews: filteredReviews });
        break;
      }
      case 'Good Quality': {
        this.setState({ reviews: this.props.reviews });
        break;
      }
      default:
        this.setState({ reviews: this.props.reviews });
        break;
    }
  }

  onSortedReviews = (reviews: ReviewTypes.Review[], sortBy: string) => {
    switch (sortBy) {
      case 'highestrating': {
        return reviews.sort((a, b) => b.rating - a.rating);
      }
      case 'lowestrating': {
        return reviews.sort((a, b) => a.rating - b.rating);
      }
      case 'oldest': {
        return reviews.sort((a, b) => Date.parse(a.created) - Date.parse(b.created));
      }
      case 'newest': {
        return reviews.sort((a, b) => Date.parse(b.created) - Date.parse(a.created));
      }
      case 'mosthelpful': {
        const { customFeedback } = this.state;
        return reviews.sort((a, b) =>
          a.id && b.id ? customFeedback[b.id] - customFeedback[a.id] : 0
        );
      }
      default:
        return reviews;
    }
  }

  customOnHelpful = (id: string) => {
    const { customFeedback } = this.state;

    const newFeedback = customFeedback[id] ? { [id]: customFeedback[id] + 1 } : { [id]: 1 };
    this.setState({
      customFeedback: { ...customFeedback, ...newFeedback }
    });
  }

  renderTitle = (): JSX.Element => {
    const { reviewsRating, reviewsCount } = this.props;
    const text = {
      title: 'Reviews'
    };

    return (
      <View style={style.titleContainer}>
        <Text style={style.titleText}>{text.title}</Text>
        <CustomReviewIndicator rating={reviewsRating || 0} ratingCount={reviewsCount} />
      </View>
    );
  }

  onSelectSortBy = (item: CommerceTypes.SortingOption) => {
    // TODO: action call after select another sort by
    if (item.id === this.state.sortBy) {
      return;
    }
    const sortedReviews = this.onSortedReviews(this.state.reviews, item.id);
    this.setState({ reviews: sortedReviews, sortBy: item.id });
  }

  render(): ReactElement {
    const { styleContainer, type } = this.props;
    switch (type) {
      case ReviewType.title:
        return this.renderTitle();
      case ReviewType.link:
        return (
          <View style={[style.container, styleContainer]}>
            <Link
              style={style.accordionContainer}
              title={this.renderTitle()}
              closedIconImage={image.iconArrow}
              onPress={this.props.onPress}
            />
          </View>
        );
      case ReviewType.accordion:
        return (
          <View style={[style.container, styleContainer]}>
            <Accordion
              style={style.accordionContainer}
              title={this.renderTitle()}
              iconFormat='image'
              closedIconImage={image.iconArrow}
              openIconImage={image.iconArrow}
              openIconStyle={style.openIconStyle}
            >
              <CustomReviews
                type={ReviewType.normal}
                reviews={this.props.reviews}
                renderOnlyTitle={this.props.renderOnlyTitle}
                children={this.props.children}
                reviewsCount={this.props.reviewsCount}
                reviewsRating={this.props.reviewsRating}
                styleContainer={this.props.styleContainer}
              />
            </Accordion>
          </View>
        );
      default:
        return (
          <View style={[style.container, styleContainer]}>
            <ReviewsList
              reviews={this.state.reviews}
              customOnHelpful={this.customOnHelpful}
              customFeedback={this.state.customFeedback}
            />
          </View>
        );
    }
  }
}

export default CustomReviews;
