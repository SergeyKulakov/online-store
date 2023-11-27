import React, { FC, useState } from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import { GridRenderItemInfo } from '@brandingbrand/fscomponents';
import { env, useNavigator } from '@brandingbrand/fsapp';
import ColorSwatches from '../Swatches/ColorSwatches';
import PIPInfo from '../Info/PIPInfo';
import Favorite from '../Favorite/Favorite';
import styles from './PIPItem.styles';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLoginStatus } from '@assos/state/user/selectors';
import { addToWishlist, getWishlistItems, removeFromWishlist } from '@assos/state/wishlist';

export interface PIPItemProps extends GridRenderItemInfo<ProductControllersTypes.Product> {
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  imageProps?: ImageProps;
  lengthSwatches?: number;
  withCTA?: boolean;
  ctaText?: string;
  ctaType?: CTAButtonTypes;
  ctaStyle?: StyleProp<TextStyle>;
}

export const PIPItem: FC<PIPItemProps> = props => {
  const isLoggedIn = useSelector(getUserLoginStatus);
  const dispatch = useDispatch();
  const items = useSelector(getWishlistItems);
  const [activeColor, setActiveColor] = useState<ProductControllersTypes.ColorDetails>();
  const assets = activeColor?.assets || props.item.assets;
  const uri = `${env.magento.mediaBaseURL}/${assets.placeholders.small_image}`;
  const wishlistEntry = items.find(item => item.sku === props.item.sku);
  const navigator = useNavigator();

  const handleFavoritePressed = async () => !wishlistEntry ?
    addToWishlist(dispatch, props.item.sku) : removeFromWishlist(dispatch, wishlistEntry?.id);

  const handleSwatchPress = (swatch: ProductControllersTypes.ColorDetails) =>
    () => {
      setActiveColor(swatch);
    };

  const handleItemPress = () => {
    const id = activeColor?.id || props.item.id;
    navigator.push(`/shop/product/${id}`);
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TouchableOpacity onPress={handleItemPress}>
        <Image
          source={{ uri }}
          style={[
            styles.image,
            { marginRight: props.index === 0 ? 1 : 0 },
            props.imageStyle
          ]}
        />
      </TouchableOpacity>
      {isLoggedIn && (
        <Favorite favorited={!!wishlistEntry} onPress={handleFavoritePressed} />
      )}
      <View style={styles.bottomSectionContainer}>
        <ColorSwatches
          swatches={props.item.colorSwatches}
          maxLength={props.lengthSwatches}
          onSwatchPress={handleSwatchPress}
        />
        <PIPInfo item={props.item} onTextPress={handleItemPress} />
      </View>
      {props.withCTA &&
        (
          <CTAButton
            text={props.ctaText}
            type={props.ctaType}
            style={props.ctaStyle}
          />
        )
      }
    </View>
  );
};

export default PIPItem;
