import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ShopSearchBar } from './ShopSearchBar';
import { CategoryLine } from '@brandingbrand/fscomponents';
import { CATEGORY_ACTIONS } from './category_actions';
import { assetsImages, fonts } from '@assos/styles';
import { useNavigator } from '@brandingbrand/fsapp';
import { ShopGhost } from './ShopGhost';
import { MenuTypes } from '@assos/datasources/magento/Menus/menus.type';
// const styles = StyleSheet.create({});

interface MagentoCategoryNavigatorProps {
  parentCategoryIds: { MAN: string; WOMAN: string };
  allCategories: MenuTypes.Menus.Response[];
}

interface CategoryNavigationProps {
  categoryId: string;
  allCategories: MenuTypes.Menus.Response[];
  setCategoryID: (value: string) => void;
  handleNavigateToPIP?: (title: string, id: string) => void;
  navigateToPIP: boolean;
}

// TODO export + refactor

// TODO export+refactor
const RenderCategories = ({
  categoryId,
  setCategoryID,
  allCategories,
  navigateToPIP,
  handleNavigateToPIP
}: CategoryNavigationProps) => {
  const [subcategories, setSubcategories] = useState<
    MenuTypes.Menus.Response[]>([]);
  const handleOnPressCategory = (selectedCategory: string) => {
    setCategoryID(selectedCategory);
  };

  useEffect(() => {
    CATEGORY_ACTIONS.getSubcategories(categoryId, allCategories)
      .then(res => {
        return setSubcategories(res);
      })
      .catch();
  }, [categoryId]);

  const categoryKeyExtractor = (data: MenuTypes.Menus.Response) => data.id;

  if (!subcategories.length) {
    return <ShopGhost />;
  }
  return (
    <FlatList
      data={subcategories}
      // TODO remove lambda?
      // tslint:disable-next-line: jsx-no-lambda
      renderItem={({ item }) => (
        <CategoryLine
          id={item.id}
          onPress={it => {
            if (navigateToPIP && !!handleNavigateToPIP) {
              return handleNavigateToPIP(it.title, item.object_id);
            }
            return handleOnPressCategory(item.id);
          }}
          title={item.name}
          titleStyle={{
            paddingVertical: 30,
            margin: 0,
            paddingHorizontal: 18,
            fontSize: 17,
            fontFamily: fonts.maisonNeue,
            fontWeight: '400',
            color: '#333132'
          }}
          underlayColor={'#E1E1E1'}
        />
      )}
      keyExtractor={categoryKeyExtractor}
      style={{ paddingBottom: 112 }}
    />
  );
};

// TODO export+refactor
const MagentoCategoryNavigator = ({
  parentCategoryIds,
  allCategories
}: MagentoCategoryNavigatorProps) => {
  const [currentCategory, setCurrentCategory] = useState(parentCategoryIds.MAN);
  const [selection, setSelection] = useState<string>('Best selection');

  const navigator = useNavigator();

  const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      paddingHorizontal: 18,
      borderBottomColor: '#858585',
      borderBottomWidth: 1
    },
    activeTab: {
      borderBottomColor: 'black',
      borderBottomWidth: 2.5,
      padding: 12,
      fontFamily: fonts.maisonNeue,
      fontSize: 15,
      fontWeight: '500'
    },
    inactiveTab: {
      fontFamily: fonts.maisonNeue,
      fontSize: 15,
      margin: 12,
      fontWeight: '400'
    }
  });

  const handleTabPress = () => {
    currentCategory === parentCategoryIds.MAN
      ? setCurrentCategory(parentCategoryIds.WOMAN)
      : setCurrentCategory(parentCategoryIds.MAN);
  };

  const handlePressBack = () => {
    const parentId = CATEGORY_ACTIONS.getParentId(
      currentCategory,
      allCategories
    );
    if (!!parentId) {
      setCurrentCategory(parentId);
    }
  };

  const handleSearch = () => {
    navigator.open('/shop/search');
  };

  const handleToPIP = (title: string, id?: string) => {
    navigator.open('/shop/pindex', { title, id, selection, setSelection });
  };

  if (
    currentCategory === parentCategoryIds.MAN ||
    currentCategory === parentCategoryIds.WOMAN
  ) {
    return (
      <>
        <ShopSearchBar />
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={
              currentCategory === parentCategoryIds.MAN
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={handleTabPress}
          >
            <Text>
              {CATEGORY_ACTIONS.getCategoryTitleById(
                parentCategoryIds.MAN,
                allCategories
              )}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              currentCategory === parentCategoryIds.WOMAN
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={handleTabPress}
          >
            <Text>
              {CATEGORY_ACTIONS.getCategoryTitleById(
                parentCategoryIds.WOMAN,
                allCategories
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RenderCategories
            setCategoryID={setCurrentCategory}
            allCategories={allCategories}
            categoryId={currentCategory}
            navigateToPIP={false}
          />
        </ScrollView>
      </>
    );
  }

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 24,
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderBottomColor: '#DBDBDB',
          borderBottomWidth: 1
        }}
      >
        <TouchableOpacity onPress={handlePressBack}>
          <Image
            source={assetsImages.arrowLeft}
            style={{ height: 24, resizeMode: 'contain' }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: fonts.orbitron,
            fontSize: 14,
            lineHeight: 18,
            fontWeight: '500',
            flexGrow: 1,
            textAlign: 'center'
          }}
        >
          {CATEGORY_ACTIONS.getCategoryTitleById(
            currentCategory,
            allCategories
          )}
        </Text>
        <TouchableOpacity onPress={handleSearch}>
          <Image
            style={{ height: 20, resizeMode: 'contain' }}
            source={assetsImages.search}
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderCategories
          setCategoryID={setCurrentCategory}
          allCategories={allCategories}
          categoryId={currentCategory}
          navigateToPIP={true}
          handleNavigateToPIP={handleToPIP}
        />
      </ScrollView>
    </>
  );
};

export default MagentoCategoryNavigator;
