// these are hardcoded to match categories coming from Core
// there is no way to dynamically generate these currently
import { ListRenderItemInfo, StyleProp, TextStyle } from 'react-native';
import { CommerceTypes } from '@brandingbrand/fscommerce';
import { ImageSource } from 'react-native-vector-icons/Icon';
import { i18n, keys } from '@assos/lib';

export interface CategoryLineProps {
  image?: ImageSource;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
}

// TODO temporary stopper pending api adjustment AS-364
export const categories = [
  {id: '2', title: i18n.string(keys.shop.landing.shop.clothing)},
  {id: '3', title: i18n.string(keys.shop.landing.shop.accessories)},
  {id: '4', title: i18n.string(keys.shop.landing.shop.roadCollections)},
  {id: '5', title: i18n.string(keys.shop.landing.shop.mountainCollections)},
  {id: '6', title: i18n.string(keys.shop.landing.shop.gravelCollections)},
  {id: '7', title: i18n.string(keys.shop.landing.shop.triathlonCollections)},
  {id: '8', title: i18n.string(keys.shop.landing.shop.seasons)},
  {id: '9', title: i18n.string(keys.shop.landing.shop.extraCollections)},
  {id: '0', title: i18n.string(keys.shop.landing.shop.archive)}
];


// TODO temporary stopper pending api adjustment AS-364
export const featuredEquipment: ListRenderItemInfo<CommerceTypes.Category>[] = [
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.newArrivals),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }

  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.equip),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }

  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.mille),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }

  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.indoor),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }

  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.rain),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }

  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.gifts),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }
  },
  {
    item: {
      title: i18n.string(keys.shop.landing.featureEquipments.archive),
      id: '1'
    },
    index: 1,
    separators: {
      highlight: () => undefined,
      unhighlight: () => undefined,
      updateProps: () => undefined
    }
  }
];
