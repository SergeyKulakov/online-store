import React from 'react';
import {useSelector} from 'react-redux';
import { ActivityIndicator, View } from 'react-native';

import {getCategories, getParentCategoryIds} from '@assos/state/categories';

import MagentoCategoryNavigator from './ShopComponent';

const ShopLanding = () => {

  const allCategories = useSelector(getCategories);
  const parentCategoryIds = useSelector(getParentCategoryIds);

  if (!allCategories) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <MagentoCategoryNavigator
        parentCategoryIds={parentCategoryIds}
        allCategories={allCategories}
      />
    </View>
  );
};

export default ShopLanding;
