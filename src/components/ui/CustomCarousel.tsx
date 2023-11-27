import React, { Component, ReactNode } from 'react';
import {
  Image,
  ImageResizeMode,
  ImageURISource,
  ListRenderItem,
  Modal,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { MultiCarousel } from '@brandingbrand/fscomponents';

import { assetsImages, fontFamily, lightMode as palette } from '@assos/styles';

export enum PaginationType {
  Dots,
  Numbers
}

interface CustomCarouselProps {
  items: CommerceTypes.Image[];
  paginationType?: PaginationType;
  styleContainer?: StyleProp<ViewStyle>;
  marginBottom?: number | string;
  height?: number | string;
  styleCarousel?: StyleProp<ViewStyle>;
  styleDots?: StyleProp<ViewStyle>;
  styleDotActive?: StyleProp<ViewStyle>;
  likeActiveOpacity?: number;
  likePositionTopRight?: boolean;
  likePositionTopCenter?: boolean;
  likePositionTopLeft?: boolean;
  likePositionBottomRight?: boolean;
  likePositionBottomCenter?: boolean;
  likePositionBottomLeft?: boolean;
  likeIconColor?: string;
  renderLikeImage?: JSX.Element;
  isShowLike?: boolean;
  hasInWishlist?: boolean;
  hideModalClose?: boolean;
  modalCloseLeft?: boolean;
  onPressLike?: () => void | Promise<void>;
  indentTopModalClose?: number | string;
  indentBottomModalClose?: number | string;
  imageResizeMode?: ImageResizeMode;
}

export enum ETypeImage {
  URI,
  Image
}

interface CustomCarouselState {
  modalVisible: boolean;
  modalImage: ImageURISource;
}

const image = {
  default: require('@assets/images/default-carousel-image.png'),
  like: require('@assets/icons/heart.png'),
  close: require('@assets/icons/iconClose.png')
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginBottom: 20
  },
  itemContainer: {
    width: '100%'
  },
  itemImage: {
    width: '100%',
    height: '100%'
  },
  itemLikeContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 50,
    zIndex: 1
  },
  likeColorDefault: {
    backgroundColor: palette.systemBackgroundPrimary
  },
  likePositionTopRight: {
    top: 15,
    right: 15
  },
  likePositionTopCenter: {
    top: 15,
    right: '46%'
  },
  likePositionTopLeft: {
    top: 15,
    left: 15
  },
  likePositionBottomRight: {
    bottom: 30,
    right: 15
  },
  likePositionBottomCenter: {
    bottom: 30,
    left: '46%'
  },
  likePositionBottomLeft: {
    bottom: 30,
    left: 15
  },
  itemLikeImage: {
    width: 20,
    height: 18
  },
  dots: {
    width: 6,
    height: 6,
    backgroundColor: palette.iconTertiary,
    opacity: 0.5,
    marginRight: 2,
    display: 'flex'
  },
  dotActive: {
    marginTop: -1,
    width: 8,
    height: 8,
    backgroundColor: palette.iconPrimary,
    opacity: 1
  },
  modalImageContainer: {
    minWidth: '100%',
    minHeight: '100%'
  },
  pageIndicator: {
    position: 'absolute',
    bottom: 65,
    left: 0,
    right: 0
  },
  modalCloseContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 16
  },
  hitSlopClose: {
    top: 12,
    bottom: 12,
    left: 12,
    right: 12
  },
  modalCloseLeft: {
    justifyContent: 'flex-start'
  },
  modalCloseRight: {
    justifyContent: 'flex-end'
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  paginationText: {
    fontFamily,
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.5,
    color: palette.textPrimary
  }
});

class CustomCarousel extends Component<CustomCarouselProps, CustomCarouselState> {
  state: CustomCarouselState = {
    modalVisible: false,
    modalImage: image.default
  };

  handleZoomInImage = (image: ImageURISource) => () => {
    this.setState({ modalVisible: true, modalImage: image });
  }

  handleZoomOutImage = (): void => {
    this.setState({ modalVisible: false });
  }

  getByPaginationType = (
    paginationType: PaginationType,
    data: { [key in PaginationType]: ViewStyle }
  ): ViewStyle => data[paginationType]

  renderItem: ListRenderItem<CommerceTypes.Image> = ({ item, index }): JSX.Element => {
    const source: ImageURISource = {
      uri: item?.uri
    };
    const isShowModal: boolean = this.state.modalVisible;

    const itemStyle: StyleProp<ViewStyle> = this.getByPaginationType(
      this.props.paginationType || PaginationType.Dots,
      {
        [PaginationType.Dots]: {
          marginBottom: 15
        },
        [PaginationType.Numbers]: {
          marginBottom: 9
        }
      }
    );

    return (
      <TouchableOpacity
        style={[style.itemContainer, !isShowModal && itemStyle]}
        key={index}
        activeOpacity={1}
        onPress={!isShowModal ? this.handleZoomInImage(source) : this.handleZoomOutImage}
      >
        {item && (
          <Image
            style={style.itemImage}
            resizeMode={this.props.imageResizeMode ?? 'cover'}
            source={source}
          />
        )}
      </TouchableOpacity>
    );
  }

  // tslint:disable-next-line: cyclomatic-complexity
  render(): JSX.Element {
    const { modalVisible } = this.state;
    const {
      items,
      styleDots,
      styleDotActive,
      height,
      styleContainer,
      hideModalClose,
      modalCloseLeft,
      indentTopModalClose,
      indentBottomModalClose,
      isShowLike,
      likeIconColor,
      likeActiveOpacity,
      renderLikeImage,
      likePositionTopRight,
      likePositionTopCenter,
      likePositionTopLeft,
      likePositionBottomRight,
      likePositionBottomCenter,
      likePositionBottomLeft,
      onPressLike,
      paginationType,
      hasInWishlist
    } = this.props;

    const { modalImage } = this.state;

    const isPaginationNumbersType: boolean = paginationType === PaginationType.Numbers;
    const multiCarouselPaginationConfig = isPaginationNumbersType
      ? { renderPageIndicator: this.renderPageIndicatorNumbers }
      : {};

    let modalItems: CommerceTypes.Image[] = [];
    if (!!items.length) {
      const itemSelected = items.find(imageItem => imageItem.uri === modalImage.uri);
      modalItems = items.filter(imageItem => imageItem.uri !== modalImage.uri);
      if (!!itemSelected) {
        modalItems.unshift(itemSelected);
      }
    }

    return (
      <View
        style={[
          style.container,
          styleContainer,
          { height: !!height ? height : 443 },
          isPaginationNumbersType && { paddingBottom: 20 }
        ]}
      >
        {!isShowLike && (
          <TouchableOpacity
            style={[
              style.itemLikeContainer,
              !!likeIconColor ? { backgroundColor: likeIconColor } : style.likeColorDefault,
              likePositionTopRight && style.likePositionTopRight,
              likePositionTopCenter && style.likePositionTopCenter,
              likePositionTopLeft && style.likePositionTopLeft,
              likePositionBottomRight && style.likePositionBottomRight,
              likePositionBottomCenter && style.likePositionBottomCenter,
              likePositionBottomLeft && style.likePositionBottomLeft,
              !likePositionTopCenter &&
              !likePositionTopLeft &&
              !likePositionBottomRight &&
              !likePositionBottomCenter &&
              !likePositionBottomLeft &&
              style.likePositionTopRight
            ]}
            activeOpacity={likeActiveOpacity || 0.7}
            onPress={onPressLike}
          >
            {!!renderLikeImage ? (
              renderLikeImage
            ) : hasInWishlist ? (
              <Image style={style.itemLikeImage} source={assetsImages.favoriteBlack}/>
            ) : (
              <Image style={style.itemLikeImage} source={image.like} />
            )}
          </TouchableOpacity>
        )}
        {modalVisible && (
          <Modal>
            {!hideModalClose && (
              <TouchableOpacity
                hitSlop={style.hitSlopClose}
                style={[
                  style.modalCloseContainer,
                  modalCloseLeft ? style.modalCloseLeft : style.modalCloseRight,
                  { marginTop: !!indentTopModalClose ? indentTopModalClose : 50 },
                  { marginBottom: indentBottomModalClose ? indentTopModalClose : 5 }
                ]}
                activeOpacity={0.7}
                onPress={this.handleZoomOutImage}
              >
                <Image source={image.close} />
              </TouchableOpacity>
            )}
            <ScrollView contentContainerStyle={style.modalImageContainer}>
              <MultiCarousel
                itemsPerPage={1}
                data={items}
                renderItem={this.renderItem}
                pageIndicatorStyle={style.pageIndicator}
                dotStyle={style.dots}
                dotActiveStyle={style.dotActive}
              />
            </ScrollView>
          </Modal>
        )}
        <MultiCarousel
          itemsPerPage={1}
          data={items}
          renderItem={this.renderItem}
          dotStyle={[style.dots, styleDots]}
          dotActiveStyle={styleDotActive || style.dotActive}
          {...multiCarouselPaginationConfig}
        />
      </View>
    );
  }

  private renderPageIndicatorNumbers = (currentIndex: number, itemsCount: number): ReactNode => (
    <View style={style.paginationContainer}>
      <Text style={style.paginationText}>{`${currentIndex + 1}/${itemsCount}`}</Text>
    </View>
  )
}

export default CustomCarousel;
