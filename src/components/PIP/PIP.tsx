import React, { FC, useContext } from 'react';
import PIPGrid from './Grid/PIPGrid';
import SortAndFilter from './SortAndFilter/SortAndFilter';
import { ProductContext } from './Context/ProductProvider';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getRecentlyViewed } from '@assos/state/recentlyViewed/selectors';
import styles from './PIP.styles';
import FilterCarousel from './FilterCarousel/FilterCarousel';
import NoResultsFound from './Errors/NoResultsFound';
import { PIPHeader } from '@assos/components/PIP/Header/PIPHeader';
import {i18n, keys} from '@assos/lib';

const PIP: FC = props => {
  const { products, sorting, selectedFilters, title } =
    useContext(ProductContext);
  const recentlyViewedItems = useSelector(getRecentlyViewed);
  const isRecentlyVieved = title === i18n.string(keys.pdp.recentlyViewed);

  const renderHeaderSection = () => (
    <>
      <SortAndFilter />
      {Object.keys(selectedFilters).length > 0 && <FilterCarousel />}
    </>
  );

  if (!products.length && Object.keys(selectedFilters).length > 0 && !sorting) {
    return (
      <View>
        <PIPHeader title={title} />

        {renderHeaderSection()}
        <NoResultsFound />
      </View>
    );
  }

  if (sorting || !products.length) {
    return (
      <>
        <PIPHeader title={title} />
        <View style={styles.activityIndicatorContainer}>
          {renderHeaderSection()}
          <ActivityIndicator />
          <View />
        </View>
      </>
    );
  }

  return (
    <>
      <PIPHeader title={title} isHideSearch={isRecentlyVieved} />
      {!isRecentlyVieved && renderHeaderSection()}
      <PIPGrid products={!isRecentlyVieved ? products : recentlyViewedItems} />
    </>
  );
};

export default PIP;
