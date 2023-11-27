import React from 'react';
import NotifyComponent from '@assos/components/PDP/StockAlerts/NotifyComponent';
import ModalWrapper from '@assos/components/ui/ModalWrapper';
import { i18n, keys } from '@assos/lib';
import { makeModal } from '@brandingbrand/fsapp';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

interface NotifyModalProps {
  product: ProductControllersTypes.Product;
}

const NotifyModal = makeModal<void, NotifyModalProps>(props => {
  const {product, resolve} = props;
  return (
    <ModalWrapper
      title={i18n.string(keys.pdp.notifyWhenAvailableTitle)}
      {...props}
    >
      <NotifyComponent product={product} resolve={resolve} />
    </ModalWrapper>
  );
});

export default NotifyModal;
