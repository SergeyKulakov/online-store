import React, { FunctionComponent } from 'react';
import { FlatList, FlatListProps, ListRenderItemInfo, Text, View } from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';

import { ShopCategoryLine } from '@assos/components/Shop/ShopCategoryLine';
import { categories, CategoryLineProps, featuredEquipment } from '@assos/components/Shop/helpers';

import { noop } from '@assos/helpers';
import { keyExtractor } from '@assos/helpers/list';
import { i18n, keys } from '@assos/lib';

import { shopStyles as styles } from './styles';
import { assetsImages } from '@assos/styles';


const renderItem = ({image, onPress, titleStyle}: CategoryLineProps) =>
  ({ item }: ListRenderItemInfo<CommerceTypes.Category>) => {
    return (
      <ShopCategoryLine
        key={item.title}
        titleStyle={titleStyle}
        image={image}
        onPress={onPress}
        title={item?.title}
        id={item?.id}
      />
    );
  };

export interface CategoryListProps {
  id?: string;
  listViewProps?: Partial<FlatListProps<CommerceTypes.Category>>;
  onNavigate?: (data: CommerceTypes.Category) => void;
}

export const ShopCategoryList: FunctionComponent<CategoryListProps> = React.memo(props => {


  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <View style={styles.equipmentTitleWrapper}>
        <Text style={styles.equipmentTitle}>
          {i18n.string(keys.shop.landing.featureEquipments.title)}
        </Text>
      </View>
      <View >
        {
          featuredEquipment
            .map(renderItem({
              onPress: noop,
              image: assetsImages.arrowRightBold,
              titleStyle: styles.labelEquipment
            }))
        }
      </View>
    </View>
  );


  return (
   <View>
     <FlatList
       style={styles.categoryWrapper}
       nestedScrollEnabled
       ListFooterComponent={renderFooter}
       data={categories}
       renderItem={renderItem({onPress: noop})}
       keyExtractor={keyExtractor}
       {...props.listViewProps}
     />
   </View>
  );
});
