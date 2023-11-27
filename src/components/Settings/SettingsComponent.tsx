import React from 'react';
import { i18n, keys } from '@assos/lib';
import { useNavigator } from '@brandingbrand/fsapp';
import { assetsImages } from '@assos/styles';
import { Image } from 'react-native';
import { CategoryLine } from '@brandingbrand/fscomponents';
import styles from './SettingsComponent.style';
import { isIos } from '@assos/helpers';
import { Header } from '@assos/components/ui/Header';

interface MenuItem {
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  {
    title: i18n.string(keys.account.settings.stylePreferences),
    url: 'account/stylePreferences'
  },
  {
    title: i18n.string(keys.account.settings.notificationPreferences),
    url: 'account/notification'
  },
  {
    title: i18n.string(keys.account.settings.wishlist),
    url: 'account/webview/wishlist'
  },
  {
    title: i18n.string(keys.account.storeLocator),
    url: 'account/webview/storelocator'
  },
  {
    title: i18n.string(keys.account.settings.customerService),
    url: 'account/webview/customer-service?section=contact-us'
  },
  {
    title: i18n.string(keys.account.settings.deleteAccount),
    url: 'account/delete'
  }
];

export const SettingsComponent = () => {
  const navigator = useNavigator();
  const handleBack = () => navigator.pop();

  const handlePress = (item: MenuItem) => () => {
    navigator.open(`/${item.url}`, {
      title: item.title.toUpperCase()
    });
  };

  const renderRightArrow = () => (
    <Image source={assetsImages.arrowRight} />
  );

  return (
    <>
      {isIos &&
        (
          <Header
            backAction={handleBack}
            title={i18n.string(keys.account.appSetting)}
          />
        )
      }
      {menuItems.map((item, index) => {
        return (
          <CategoryLine
            key={index}
            id={`${index}`}
            style={styles.itemList}
            title={item.title}
            titleStyle={styles.menuItem}
            renderAccessory={renderRightArrow}
            onPress={handlePress(item)}
          />
        );
      })}
    </>
  );
};
