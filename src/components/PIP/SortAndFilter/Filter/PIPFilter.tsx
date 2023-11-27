import React, {useCallback, useContext} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {assetsImages} from '@assos/styles';
import styles from './PIPFilter.styles';
import {i18n, keys} from '@assos/lib';
import {useModals} from '@brandingbrand/fsapp';
import FilterByModal from '@assos/modals/FilterByModal/FilterByModal';
import {ProductContext} from '../../Context/ProductProvider';


const PIPFilter = () => {
  const modals = useModals();
  const {filterOptions, filterBy, selectedFilters} = useContext(ProductContext);

  const handlePress = useCallback(() => {
    modals.showModal(FilterByModal, {filterOptions, filterBy, selectedFilters}).catch();
  }, [selectedFilters, filterOptions]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={assetsImages.filter} style={styles.icon}/>
      <Text style={styles.filter}>{i18n.string(keys.pip.sortAndFilter.filter)}</Text>
    </TouchableOpacity>
  );
};

export default PIPFilter;
