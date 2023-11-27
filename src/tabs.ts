import { Tab } from '@brandingbrand/fsapp';
import i18n, { keys } from './lib/translations';
import { tabsStyle } from '@assos/styles';


export const Discover: Tab = {
  id: 'DISCOVER_TAB',
  text: i18n.string(keys.screenTitles.discover),
  icon: require('@assets/tab-icons/discover.png'),
  ...tabsStyle
};

export const Shop: Tab = {
  id: 'SHOP_TAB',
  text: i18n.string(keys.screenTitles.shop),
  icon: require('@assets/tab-icons/shop.png'),
  ...tabsStyle
};

export const Cart: Tab = {
  id: 'CART_TAB',
  text: i18n.string(keys.screenTitles.cart),
  icon: require('@assets/tab-icons/bag.png'),
  ...tabsStyle
};

export const Account: Tab = {
  id: 'ACCOUNT_TAB',
  text: i18n.string(keys.screenTitles.account),
  icon: require('@assets/tab-icons/profile.png'),
  ...tabsStyle
};
