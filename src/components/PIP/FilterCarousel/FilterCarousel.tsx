import {assetsImages} from '@assos/styles';
import {MultiCarousel} from '@brandingbrand/fscomponents';
import React, {useContext} from 'react';
import {Image, ListRenderItem, Text, TouchableOpacity} from 'react-native';
import { FilterEntry, ProductContext } from '../Context/ProductProvider';
import styles from './FilterCarousel.styles';

const FilterCarousel = () => {

  const {selectedFilters, clearFilters, clearSingleFilter} = useContext(ProductContext);


  const handleItemPress = (item: FilterEntry) => () => {
    if (item.name === 'Clear all') {
      return clearFilters();
    }
    return clearSingleFilter(item);
  };


  const renderItem: ListRenderItem<FilterEntry> = ({item, index}) => (

    index === 0 ? (
    <TouchableOpacity
      onPress={handleItemPress(item)}
      style={[styles.container, {marginLeft: 20}]}
    >
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
    ) : (
    <TouchableOpacity onPress={handleItemPress(item)} style={styles.container}>
      <Image source={assetsImages.whiteClose} style={styles.close}/>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
    )
  );

  const getFilterEntries = () => {
    const activeFilterValues = Object.keys(selectedFilters).reduce<FilterEntry[]>((acc, key) => {
      const entries = selectedFilters[key].map(name => ({section: key, name}));
      return acc.concat(entries);
    }, []);
    if (activeFilterValues.length) {
      return [{section: '', name: 'Clear all'}, ...activeFilterValues];
    }
    return [];
  };

  return (
    <MultiCarousel
      data={getFilterEntries()}
      hideScrollbar
      pageIndicatorStyle={{display: 'none'}}
      renderItem={renderItem}
      style={styles.carousel}
    />
  );
};

export default FilterCarousel;
