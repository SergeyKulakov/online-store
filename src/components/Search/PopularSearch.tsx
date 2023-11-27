import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { PopularSearchItem } from '@assos/components/Search/types';

import { i18n, keys } from '@assos/lib';
import { logError } from '@assos/helpers';
import { getPopularSearchTerms } from './helpers';

import { searchStyles as styles } from '@assos/components/Search/styles';
import { CATEGORY_ACTIONS } from '../Shop/category_actions';
import { useNavigator } from '@brandingbrand/fsapp';

export const PopularSearch = () => {
  const navigator = useNavigator();
  const [popularSearchCollection, setPopularSearchCollection] = React.useState
    <PopularSearchItem[] | undefined>([]);

  const goToPopularTerm = async (term: string, title: string) => {
    const categoryId = await CATEGORY_ACTIONS.getIdByPath(term);
    if (!!categoryId) {
      navigator.open(`/shop/pindex`, {
        title
      });
    }
    return;
  };

  React.useEffect(() => {
    getPopularSearchTerms().then(setPopularSearchCollection).catch(logError);
  }, []);

  const handlePress = (term?: string, title?: string) => async () => {
    if (term && title) {
      return goToPopularTerm(term, title);
    }
  };

  return popularSearchCollection ? (
    <View style={styles.popularSearchContainer}>
      <Text style={styles.popularSearchTerms}>
        {i18n.string(keys.search.popularSearchTerms)}
      </Text>
      {popularSearchCollection.map(({ root, title }, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={handlePress(root, title)}
            style={styles.popularSearch}
          >
            <Text>{title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  ) : null;
};
