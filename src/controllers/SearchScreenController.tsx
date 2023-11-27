import React, { useEffect, useState } from 'react';
import { useNavigator } from '@brandingbrand/fsapp';

import { Search } from '@assos/components/Search';

import { assetsImages, lightMode as palette } from '@assos/styles';
import { useLazyLoadingSearch } from '@assos/components/PIP/Hooks/useLazyLoadingSearch';

const initialFilter = {
  where: {
    and: [
      {
        visible: 1
      },
      {
        'attributes.platform_visibility.value': {
          inq:
          [
            'Any',
            'ASSOS-APP'
          ]
        }
      }
    ]
  },
  offset: 0,
  limit: 6
};


const MIN_LENGTH_VALUE = 3;

export const SearchScreenController = () => {

  const [keyword, setKeyword] = useState('');
  const [inputValue, setInputValue] = useState('');
  const {products, loaded, count, getInitialProducts, updateProducts} = useLazyLoadingSearch();
  const [offset, setOffset] = useState(0);

  const navigator = useNavigator();
  const handleClose = () => navigator.pop();
  const moveToPIPScreen = () => {
    // @ts-ignore
    navigator.open();
  };

  const fetchSuggestions = async (value: string) => {
    setOffset(0);
    getInitialProducts(value, initialFilter);
  };

  const updateSuggestions = (value: string) => {
    updateProducts(value, {...initialFilter, offset});
  };

  const advanceOffest = () => {
    if (offset < count) {
      setOffset(current => current + 6);
    }
  };

  useEffect(() => {
    if (offset !== 0 && inputValue) {
      updateSuggestions(inputValue);
    }
  }, [offset]);

  useEffect(() => {
    let delay: NodeJS.Timeout;
    if (inputValue.length >= MIN_LENGTH_VALUE) {
      delay = setTimeout(async () => {
        await fetchSuggestions(inputValue);
      }, 400);
    }
    return () => clearTimeout(delay);
  }, [inputValue]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setKeyword(value);
  };

  return (
    <Search
      onClose={handleClose}
      results={products}
      resultsCount={count}
      onInputChange={handleInputChange}
      inputValue={keyword}
      onEndReached={advanceOffest}
      searchBarProps={{
        searchIcon: assetsImages.search,
        cancelButtonAlwaysVisible: true,
        cancelButtonWidth: 20,
        cancelImage: assetsImages.arrowLeft,
        showCancel: 'left',
        inputProps: {
          value: keyword === ' ' ? '' : keyword,
          autoCorrect: false,
          autoCapitalize: 'none',
          autoFocus: true
        },
        clearButtonMode: 'while-editing',
        clearIcon: assetsImages.clearIcon,
        placeholderTextColor: palette.textSecondary
      }}
      moveToPIPScreen={moveToPIPScreen}
      isSuggestionsLoaded={loaded}
    />
  );
};
