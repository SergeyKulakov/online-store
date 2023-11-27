import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { NoResult } from '@assos/components/Search/NoResult';
import { SearchBar } from '@assos/components/Search/SearchBar';
import CarouselHeader from '@assos/components/ui/CarouselHeader';
import { SearchGhost } from '@assos/components/SearchGhost';

import { SearchScreenProps } from '@assos/components/Search/types';
import { SearchCarousel } from '@assos/components/Search/Carousel';
import { i18n, keys } from '@assos/lib';
import { PopularSearch } from '@assos/components/Search/PopularSearch';

import { assetsImages } from '@assos/styles';
import { searchStyles as styles } from './styles';
import { SearchScreenStyles as S } from '@brandingbrand/fscomponents/src/styles';
import { ProductControllersTypes } from '@assos/datasources/magento/Products';
import { useNavigator } from '@brandingbrand/fsapp';


export const Search: FC<SearchScreenProps> = ({
  onEndReached,
  onInputSubmit,
  onInputChange,
  inputValue: parentValue,
  moveToPIPScreen,
  onClose,
  onResultPress,
  renderIdleState,
  results,
  resultsCount,
  resultsLoading,
  searchBarProps,
  isSuggestionsLoaded,
  screen
}) => {
  const [inputValue, setInput] = useState<string>();
  const navigator = useNavigator();

  const handleViewAll = () => {
    navigator.open('/shop/pindex/', {
      title: inputValue,
      isSearch: true
    });
  };

  const handleSubmit = (value: string) => {
    if (onInputSubmit) {
      return onInputSubmit(value);
    }
  };

  const setInputValue = (inputValue: string) => {
    setInput(inputValue);
    onInputChange?.(inputValue);
  };

  const getInputValue = () => {
    return String(parentValue ?? inputValue);
  };

  const handleResultPress = (
    result?: ProductControllersTypes.Product
  ) => () => {
    setInputValue('');
    if (moveToPIPScreen && !!result?._id) {
      moveToPIPScreen(result?._id);
    }
    if (onClose) {
      onClose();
    }
    if (onResultPress && !!result?._id) {
      return onResultPress(result);
    }
  };

  const renderResult = () => {
    const inputValue = getInputValue();
    if (!inputValue || resultsLoading) {
      return (
        <ScrollView
          style={[S.resultsContainer, styles.searchResultsScrollView]}
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'
        >
          {renderIdleState?.()}
        </ScrollView>
      );
    } else if (!isSuggestionsLoaded) {
      return <SearchGhost/>;
    } else if (isSuggestionsLoaded && !results?.length) {
      return <NoResult/>;
    }
    return (
      <View style={[S.resultsContainer, styles.searchResultsScrollView]}>
        { !!results?.length && (
          <CarouselHeader
            text={i18n.string(keys.search.result, { count: resultsCount })}
            onViewAllPress={handleViewAll}
          />
        )}
        <SearchCarousel
          onPressItem={handleResultPress}
          onEndReached={onEndReached}
          data={results}
        />
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View style={[S.searchBarContainer, styles.searchBarContainer]}>
        <SearchBar
          onCancel={onClose}
          onSubmit={handleSubmit}
          onChange={setInputValue}
          showSearchIcon={true}
          searchIcon={assetsImages.search}
          cancelButtonAlwaysVisible={true}
          screen={screen}
          placeholder={i18n.string(keys.search.placeholder)}
          {...searchBarProps}
        />
      </View>
    );
  };


  return (
    <SafeAreaView style={[S.modalContainer]}>
      <ScrollView>
        {renderSearchBar()}
        {renderResult()}
        <PopularSearch />
      </ScrollView>
    </SafeAreaView>
  );
};
