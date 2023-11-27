import React, {useCallback, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {RadioButtonLine} from '@brandingbrand/fscomponents';
import CTAButton from '@assos/components/ui/CTAButton';
import {i18n, keys} from '@assos/lib';
import styles from './SortByModal.styles';
import ModalHeader from '@assos/components/ui/ModalHeader';
import {makeModal} from '@brandingbrand/fsapp';
import {ProductContext, SortOptions} from '@assos/components/PIP/Context/ProductProvider';


const SortByModal = makeModal
<void, Pick<ProductContext, 'sortOptions' | 'selectedOption' | 'sortBy'>>(({
  resolve, reject, sortOptions , selectedOption, sortBy}) => {

  const [tempSelected, setTempSelected] = useState<SortOptions>(selectedOption);

  const handleApply = useCallback(() => {
    sortBy(tempSelected);
    resolve();
  }, [tempSelected]);

  const handleTempSelected = useCallback((text: SortOptions) => () => {
    setTempSelected(text);
  }, []);

  const renderItem: ListRenderItem<SortOptions> = ({item, index}) => {

    const active = () => {
      if (tempSelected === item) {
        return true;
      }

      if (!tempSelected && index === 0) {
        return true;
      }

      return false;
    };


    return (
      <RadioButtonLine
        active={active()}
        text={item}
        styleContainer={styles.item}
        styleText={styles.itemTextStyles}
        styleTextActive={styles.activeItem}
        onPress={handleTempSelected(item)}
      />
    );
  };

  const keyExtractor = (item: SortOptions) => item;

  return (
    <>
    <ModalHeader
      title={i18n.string(keys.pip.sortAndFilter.sortTitle)}
      onClose={reject}
      containerStyle={styles.headerContainer}
      titleStyle={styles.headerTitleStyles}
    />
      <View style={styles.container}>
        <FlatList
          data={sortOptions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <CTAButton
          text={i18n.string(keys.pip.sortAndFilter.apply)}
          style={styles.botton}
          handleOnPress={handleApply}
        />
      </View>
    </>

  );
});

export default SortByModal;
