import React, { useMemo, useState } from 'react';
import CTAButton, { CTAButtonTypes } from '@assos/components/ui/CTAButton';
import { i18n, keys } from '@assos/lib';
import styles from './StickyCTA.styles';
import {useModals} from '@brandingbrand/fsapp';
import NotifyModal from '@assos/modals/NotifyModal/NotifyModal';
import UpdateStockModal from '@assos/modals/UpdateStockModal/UpdateStockModal';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import {useDispatch, useSelector} from 'react-redux';
import {getAlertIdForProduct} from '@assos/state/stockAlert/selectors';
import { addToCart } from '@assos/state/cart';
import {AppStore} from '@assos/state';

interface StickyCTAProps {
  product?: ProductControllersTypes.Product;
  isOutOfStock: boolean;
}

export const StickyCTA = ({ product, isOutOfStock }: StickyCTAProps) => {
  const modals = useModals();
  const dispatch = useDispatch();
  const alertId = useSelector<AppStore>(state => getAlertIdForProduct(state, product?.id));
  const hasAlert = !!alertId;
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const handleOnPress = async () => {
    if (!product) {
      return;
    }
    if (isOutOfStock) {
      if (hasAlert) {
        await modals.showModal(UpdateStockModal, { productId: product.id }).catch();
      } else {
        await modals.showModal(NotifyModal, { product }).catch();
      }
    } else {
      setAddingToCart(true);
      addToCart(product.sku, 1, dispatch)
        .then(() => {
          setAddingToCart(false);
          setAddedToCart(true);
        })
        .catch();
    }
    if (setAddedToCart) {
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  const buttonText = useMemo((): string => {
    if (isOutOfStock) {
      if (hasAlert) {
        return i18n.string(keys.pdp.updateStockAlert);
      }
      return i18n.string(keys.pdp.notifyButton);
    }
    if (addedToCart) {
      return i18n.string(keys.pdp.addedToBag);
    }
    return i18n.string(keys.pdp.addToBag);
  }, [isOutOfStock, hasAlert, addedToCart]);

  return (
    <CTAButton
      text={buttonText}
      type={CTAButtonTypes.primary}
      style={[styles.container, !product ? styles.disabled : null]}
      styleText={styles.text}
      handleOnPress={handleOnPress}
      enableLoading
      disabled={!product}
      loading={addingToCart}
    />
  );
};
