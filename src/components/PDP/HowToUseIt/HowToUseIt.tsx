import React, { useEffect, useState } from 'react';
import { buildWhenHowToUseIt } from './helper';
import { magento } from '@assos/datasources';
import HowToUseItCarousel from './HowToUseItCarousel';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';

const HowToUseIt = ({ sku }: { sku: string }) => {
  const [products, setProducts] =
    useState<[] | ProductControllersTypes.Response>([]);

  useEffect(() => {
    buildWhenHowToUseIt(sku)
      .then(res => {
        const productSKUArray = res;
        if (productSKUArray) {
          magento
            .queryProducts({ where: { sku: { inq: productSKUArray } } })
            .then(setProducts)
            .catch();
        } else {
          return;
        }
      })
      .catch();
  }, []);

  if (products.length > 0) {
    return <HowToUseItCarousel data={products} />;
  } else {
    return null;
  }
};

export default HowToUseIt;
