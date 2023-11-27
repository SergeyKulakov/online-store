import {ProductControllersTypes} from '@assos/datasources/magento/Products';
import {MultiCarousel} from '@brandingbrand/fscomponents';
import React, {FC} from 'react';
import {ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import {PIPItem} from '../PIP/Item';
import {i18n, keys} from '@assos/lib';
import {CTAButtonTypes} from '../ui';
import styles from './HowToUseIt.styles';

interface HowToUseItProps {
  products?: ProductControllersTypes.Product[];
}

const HowToUseIt: FC<HowToUseItProps> = props => {

  // Todo the check will be removed after configuring the api to receive products
  if (!props.products) {
    return null;
  }

  const handleRenderItem: ListRenderItem<ProductControllersTypes.Product> = item => (
    <View style={styles.pipContainer}>
      <PIPItem
        containerStyle={styles.itemContainerStyle}
        withCTA
        ctaText={i18n.string(keys.pdp.addToBag)}
        ctaType={CTAButtonTypes.secondary}
        ctaStyle={styles.pipItemCTA}
        {...item}
      />

    </View>
  );


  return (
    <View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {i18n.string(keys.pdp.howWhenToUse)}
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>
            {i18n.string(keys.pdp.tittleCarouselButton)}
          </Text>
        </TouchableOpacity>
      </View>

      <MultiCarousel
        itemStyle={styles.itemStyle}
        data={props.products}
        renderItem={handleRenderItem}
        dotStyle={styles.dotStyle}
      />

    </View>
  );
};

export default HowToUseIt;
