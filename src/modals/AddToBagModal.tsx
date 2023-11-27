import React from 'react';
import { makeModal } from '@brandingbrand/fsapp';
import ModalWrapper from '@assos/components/ui/ModalWrapper';
import AddToBag from '@assos/components/PIP/AddToBag/AddToBag';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

const AddToBagModal = makeModal<
  void,
  {
    title: string;
    item: ProductControllersTypes.Product;
  }
>(({ item, reject, ...props }) => {
  const handleClose = reject;

  return (
    <ModalWrapper reject={handleClose} {...props}>
      <AddToBag item={item} handleClose={reject} />
    </ModalWrapper>
  );
});

export default AddToBagModal;
