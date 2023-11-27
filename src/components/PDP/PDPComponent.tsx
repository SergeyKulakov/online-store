import React, { FC, useEffect, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { PDPCarousel } from './PDPCarousel/PDPCarousel';
import { SizeOptions } from './SizeOptions/SizeOptions';
import styles from './PDPComponent.styles';
import PDPAccordion from './PDPAccordion/PDPAccordion';
import PDPColorOptions from './PDPColors/PDPColorOptions';
import ProductInfo from './ProductInfo/ProductInfo';
import { PDPGhost } from '@assos/components/PDP/PDPGhost/PDPGhost';
import { useDispatch, useSelector } from 'react-redux';
import WishlistButton from '../WishlistButton';
import { getUserLoginStatus } from '@assos/state/user/selectors';
import { getProductChilds } from '@assos/state/product/selectors';
import { fetchProductChilds } from '@assos/state/product';
import { noop } from 'lodash-es';
import { StickyCTA } from './StickyCTA/StickyCTA';
import { i18n, keys } from '@assos/lib';
import ProductDescription from '../ui/ProductDescription';
import { addRecentlyViewed, loadRecentlyViewed } from '@assos/state/recentlyViewed';
import { getRecentlyViewed } from '@assos/state/recentlyViewed/selectors';
import { RecentlyViewedCarousel } from './RecentlyViewedCarousel/RecentlyViewedCarousel';
import TechnologyOverview from './TechnologyOverview/TechnologyOverview';
import HowToUseIt from './HowToUseIt/HowToUseIt';


const getIsOutOfStock = (
  product: ProductControllersTypes.Product | undefined,
  variant: ProductControllersTypes.Product | undefined
): boolean => {
  if (product?.inventory.in_stock === false) {
    return true;
  }
  if (variant) {
    return !variant.inventory.in_stock;
  }
  return false;
};

export const ProductContext = React.createContext<ProductControllersTypes.Product | null>(null);

const PDPComponent: FC<{ product?: ProductControllersTypes.Product }> = ({
  product
}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUserLoginStatus);
  const childs = useSelector(getProductChilds);
  const recentlyViewedItems = useSelector(getRecentlyViewed);

  const [activeVariant, setActiveVariant] =
    useState<ProductControllersTypes.Product>();
  const [activeColor, setActiveColor] = useState<ProductControllersTypes.ColorDetails>();

  useEffect(() => {
    loadRecentlyViewed(dispatch).catch();
    return () => {
      if (product) {
        addRecentlyViewed(dispatch, product).catch();
      }
    };
  }, [product]);
  const sortedVariants = useMemo(() => {
    if (!product) {
      return [];
    }
    const orderedSizes = product.variants.find(
      v => v.attribute_code === 'size'
    )?.options;
    if (!orderedSizes) {
      return childs;
    }

    return childs
      .filter(child =>
        orderedSizes.includes(Number(child.attributes.size.key))
      )
      .sort((a, b) => {
        return (
          orderedSizes.indexOf(Number(a.attributes.size.key)) -
          orderedSizes.indexOf(Number(b.attributes.size.key))
        );
      }).map(variant => (
      {
        ...variant,
        assets: {
          ...variant.assets,
          placeholders: !!activeColor
            ? activeColor.assets.placeholders
            : product.assets.placeholders
        },
        attributes: {
          ...variant.attributes,
          color_details: (!!activeColor ? activeColor : variant.attributes.color_details)}
      })
      );
  }, [childs, product, activeColor]);

  useEffect(() => {
    setActiveVariant(undefined);
    const childIDs = activeColor?.childs || product?.childs;
    if (childIDs?.length) {
      fetchProductChilds(dispatch, childIDs).catch(noop);
    }

  }, [product, activeColor]);

  const isOutOfStock = getIsOutOfStock(product, activeVariant);

  if (!product) {
    return <PDPGhost />;
  }

  return (
    <ProductContext.Provider value={product}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <PDPCarousel product={product} activeColor={activeColor} />
          <View style={styles.textContainer}>
            <ProductInfo product={product} />
            <PDPColorOptions
              product={product}
              activeColor={activeColor}
              onPress={setActiveColor}
            />
            {product.variants.length ? (
              <SizeOptions
                variants={sortedVariants}
                onPress={setActiveVariant}
                activeVariant={activeVariant}
              />
            ) : null}
            {isLoggedIn && (
              <WishlistButton sku={activeVariant?.sku ?? product.sku} />
            )}
          </View>
          <ProductDescription
            description={product.attributes.description.value}
            visibleTextHeight={20}
            title={i18n.string(keys.productDetails.details)}
            styleTitle={styles.productDescriptionTitle}
          />
          <PDPAccordion composition={product.attributes.composition.value} />
          <TechnologyOverview product={product}/>
          <HowToUseIt sku={product.sku}/>

          <RecentlyViewedCarousel data={recentlyViewedItems} />
        </ScrollView>
        <View style={styles.stickyCtaContainer}>
        <StickyCTA
          isOutOfStock={isOutOfStock}
          product={activeVariant}
        />
        </View>
      </View>
    </ProductContext.Provider>
  );
};

export default PDPComponent;
