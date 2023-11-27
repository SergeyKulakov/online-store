import React, {useCallback, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {i18n, keys} from '@assos/lib';
import styles from './PIPSort.styles';
import {useModals} from '@brandingbrand/fsapp';
import SortByModal from '@assos/modals/SortByModal/SortByModal';
import {ProductContext} from '../../Context/ProductProvider';

const PIPSort = () => {

  const modals = useModals();
  const {sortOptions, sortBy, selectedOption} = useContext(ProductContext);

  const handlePress = useCallback(() => {
    modals.showModal(SortByModal, {sortOptions, selectedOption, sortBy}).catch();
  }, [selectedOption]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.sortBy}>{i18n.string(keys.pip.sortAndFilter.sortBy)}</Text>
      <Text style={styles.relevance}>{selectedOption}</Text>
    </TouchableOpacity>
  );
};

export default PIPSort;
