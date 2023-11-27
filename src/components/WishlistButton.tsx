import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18n, {keys} from '@assos/lib/translations';
import CTAButton, {CTAButtonTypes} from '@assos/components/ui/CTAButton';
import {
  addToWishlist,
  getWishlistItems,
  removeFromWishlist
} from '@assos/state/wishlist';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  text: {
    lineHeight: 30
  }
});

interface ButtonProps {
  sku: string;
}

const WishlistButton = ({sku}: ButtonProps) => {
  const dispatch = useDispatch();
  const items = useSelector(getWishlistItems);
  const wishlistEntry = items.find(item => item.sku === sku);

  const handleOnPress = async () => !wishlistEntry ?
    addToWishlist(dispatch, sku) : removeFromWishlist(dispatch, wishlistEntry.id);

  const buttonText = !!wishlistEntry ?
    i18n.string(keys.pdp.addedToWishlist) : i18n.string(keys.pdp.addToWishlist);

  return (
    <CTAButton
      style={styles.container}
      handleOnPress={handleOnPress}
      styleText={styles.text}
      type={CTAButtonTypes.wishlist}
      text={buttonText}
      wishlistSuccess={!!wishlistEntry}
    />
  );
};

export default WishlistButton;
