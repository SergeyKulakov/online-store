import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import React, { Component, ReactNode } from 'react';
import { CommerceTypes, ReviewTypes } from '@brandingbrand/fscommerce';
import { MoreText, ReviewIndicator } from '@brandingbrand/fscomponents';

import { i18n, keys } from '@assos/lib';
import { fontFamily, lightMode as palette } from '@assos/styles';

import { Feedback } from './CustomReviews';


const styles = StyleSheet.create({
  itemContainer: {
    width: '100%'
  },
  itemSpaceAbove: {
    paddingTop: 30
  },
  itemSpaceBelow: {
    paddingBottom: 40,
    borderBottomColor: palette.separatorPrimary,
    borderBottomWidth: 1
  },
  reviewIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15
  },
  reviewIndicator: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdText: {
    flex: 2.5,
    fontFamily,
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    marginLeft: 15
  },
  starImage: {
    width: 13,
    height: 13,
    marginRight: 3
  },
  halfStarImage: {
    width: 17,
    height: 17,
    marginRight: 3
  },
  textContainer: {
    marginBottom: 15
  },
  titleText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 5
  },
  text: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 0.5
  },
  moreLessText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 15,
    fontWeight: 'normal',
    letterSpacing: 0.5,
    marginTop: 5
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photosWrapper: {
    marginRight: 10,
    marginBottom: 15
  },
  photoImg: {
    width: 120,
    height: 140
  },
  helpfulButtonText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: 0.5
  },
  separatorVertical: {
    height: 20,
    width: 1,
    backgroundColor: palette.separatorPrimary,
    marginHorizontal: 15
  },
  aboutUserContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  aboutUserText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 15,
    letterSpacing: 0.5
  },
  aboutUserVerifiedText: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 15,
    letterSpacing: 0.5
  },
  aboutUserVerifiedContainer: {
    flexDirection: 'row'
  },
  aboutUserVerifiedImage: {
    width: 15,
    height: 15,
    marginRight: 4
  },
  helpfulButton: {
    height: 30,
    maxWidth: 130,
    borderRadius: 15,
    backgroundColor: palette.buttonTertiary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpfulImage: {
    width: 11,
    height: 14,
    marginRight: 6
  }
});

const image = {
  star: require('@assets/icons/star.png'),
  halfStar: require('@assets/icons/half-star.png'),
  emptyStar: require('@assets/icons/empty-star.png'),
  activeStepper: require('@assets/icons/activeStepper.png'),
  helpful: require('@assets/icons/helpful.png')
};

interface ReviewsListProps {
  reviews: ReviewTypes.Review[];
  containerStyles?: StyleProp<ViewStyle>;
  onHelpful?: (review: ReviewTypes.Review) => void;
  customOnHelpful?: (id: string) => void;
  customFeedback: Feedback;
}

export class ReviewsList extends Component<ReviewsListProps, any> {

  renderEmptyStar = (): ReactNode => <Image style={styles.starImage} source={image.emptyStar}/>;
  renderHalfStar = (): ReactNode => <Image style={styles.halfStarImage} source={image.halfStar}/>;
  renderFullStar = (): ReactNode => <Image style={styles.starImage} source={image.star}/>;

  renderAboutUser = (user: ReviewTypes.ReviewUser): ReactNode => {
    return (
      <View style={styles.aboutUserContainer}>
        <Text style={styles.aboutUserText}>
          {`${user.name}${!!user.location
            ? ` ${i18n.string(keys.reviews.from)} ${user.location}`
            : ''
          }`}
        </Text>
        {!!user.isVerifiedBuyer && (
          <>
            <View style={styles.separatorVertical}/>
            <View style={styles.aboutUserVerifiedContainer}>
              <Image
                source={image.activeStepper}
                style={styles.aboutUserVerifiedImage}
              />
              <Text style={styles.aboutUserVerifiedText}>
                {i18n.string(keys.reviews.verifiedBuyer)}
              </Text>
            </View>
          </>
        )}
      </View>
    );
  }

  renderHelpfulButton = (review: ReviewTypes.Review): ReactNode => {
    const { feedback, id } = review;
    const count = (id && this.props.customFeedback[id]) ? this.props.customFeedback[id] : 0;
    const countOfHelpful: number = !!feedback && !!feedback.positive ? feedback.positive : count;
    return (
      <TouchableOpacity
        style={styles.helpfulButton}
        onPress={this.onHelpful(review)}
      >
        <Image
          source={image.helpful}
          style={styles.helpfulImage}
        />
        <Text style={styles.helpfulButtonText}>
          {i18n.string(keys.reviews.helpful, {
            count: countOfHelpful
          })}
        </Text>
      </TouchableOpacity>
    );
  }

  render(): JSX.Element {
    const {
      reviews,
      containerStyles
    } = this.props;

    const reviewsLength = reviews.length;

    return (
      <ScrollView style={{ flexBasis: 'auto' }}>
        {reviews.map((review: ReviewTypes.Review, key: number) => {
          const reviewCreated = !!review.created
            ? (new Date(review.created)).toLocaleDateString()
            : '';
          const isFirst: boolean = key === 0;
          const isLast: boolean = reviewsLength - 1 === key;
          const { user } = review;

          return (
            <View
              key={key}
              style={[
                styles.itemContainer,
                !isFirst && styles.itemSpaceAbove,
                !isLast && styles.itemSpaceBelow,
                !!containerStyles && containerStyles
              ]}
            >
              <View style={styles.reviewIndicatorContainer}>
                <ReviewIndicator
                  value={review.rating}
                  style={styles.reviewIndicator}
                  renderEmptyStar={this.renderEmptyStar}
                  renderHalfStar={this.renderHalfStar}
                  renderFullStar={this.renderFullStar}
                />
                <Text style={styles.createdText}>
                  {reviewCreated}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.titleText}>
                  {review.title}
                </Text>
                <MoreText
                  numberOfCharacters={325}
                  text={review.text || ''}
                  textStyle={styles.text}
                  textMoreLessStyle={styles.moreLessText}
                />
              </View>
              {!!review.photos && !!review.photos.length && (
                <View style={styles.photosContainer}>
                  {review.photos.map((photo: CommerceTypes.Image, index: number) => (
                    <View key={index} style={styles.photosWrapper}>
                      <Image
                        source={photo}
                        style={styles.photoImg}
                      />
                    </View>
                  ))}
                </View>
              )}
              {!!user && !!user.name && this.renderAboutUser(user)}
              {this.renderHelpfulButton(review)}
            </View>
          );
        })}
      </ScrollView>
    );
  }

  private onHelpful = (review: ReviewTypes.Review) => (): void => {
    const { onHelpful, customOnHelpful } = this.props;
    if (!!onHelpful) {
      onHelpful(review);
      return;
    }
    const { id } = review;
    if (id && !!customOnHelpful) {
      customOnHelpful(id);
    }
    return;
  }
}
