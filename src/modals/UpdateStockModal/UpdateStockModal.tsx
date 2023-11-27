import React from 'react';
import ModalWrapper from '@assos/components/ui/ModalWrapper';
import { i18n, keys } from '@assos/lib';
import { makeModal } from '@brandingbrand/fsapp';
import UpdateStockComponent from '@assos/components/PDP/StockAlerts/UpdateStock';

interface UpdateStockModalProps {
  productId: number;
}

const UpdateStockModal = makeModal<void, UpdateStockModalProps>(props => {
  const {productId, resolve} = props;
  return (
    <ModalWrapper
      title={i18n.string(keys.pdp.updateStockAlert)}
      {...props}
    >
      <UpdateStockComponent productId={productId} resolve={resolve} />
    </ModalWrapper>
  );
});

export default UpdateStockModal;
