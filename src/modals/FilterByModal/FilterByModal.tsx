import React from 'react';
import {makeModal} from '@brandingbrand/fsapp';
import {Filter} from '@assos/components/PIP/FilterList';
import {ProductContext} from '@assos/components/PIP/Context/ProductProvider';


const FilterBy = makeModal
<void, {
  filterBy: ProductContext['filterBy'];
  filterOptions: ProductContext['filterOptions'];
  selectedFilters: ProductContext['selectedFilters'];
}>(({
  resolve,
  reject,
  filterBy,
  filterOptions,
  selectedFilters
}) => {

  const handleClose = resolve;
  const handleApply = (selectedItems: Record<string, string[]>) => {
    filterBy(selectedItems);
    resolve();
  };

  return (
    <Filter
      filterHeader={false}
      items={filterOptions}
      onApply={handleApply}
      onClose={handleClose}
      resolve={resolve}
      reject={reject}
      selectedItems={selectedFilters}
      showUnselected={false}
    />

  );
});

export default FilterBy;
