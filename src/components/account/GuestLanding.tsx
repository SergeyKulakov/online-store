import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigator } from '@brandingbrand/fsapp';
import { Navigation } from 'react-native-navigation';

/** components */
import { MenuList, NavMenuItem } from '../ui/MenuList';

/** misc */
import i18n, { keys } from '@assos/lib/translations';
import { Account } from '@assos/tabs';

/** style */
import { assetsImages } from '@assos/styles';
import styles from './GuestLanding.styles';
import LoginAndRegister from './SignIn/LoginAndRegister';


const menuItems: NavMenuItem[] = [
  {
    label: i18n.string(keys.account.appSetting),
    subLabel: i18n.string(keys.account.appSettingSubText),
    url: 'account/settings',
    id: 1
  },
  {
    label: i18n.string(keys.account.storeLocator),
    url: 'account/webview/storelocator',
    id: 2
  }
];

const setVisibleTabAccount = (isVisible: boolean) => {
  Navigation.mergeOptions(Account.id, {
    topBar: {
      visible: isVisible
    }
  });
};

export const GuestLanding = () => {


  useEffect(() => {
    setVisibleTabAccount(true);
    return setVisibleTabAccount(false);
  }, []);

  const navigator = useNavigator();

  const handlePress = (value: NavMenuItem) => {
    navigator.open(`/${value.url}`);
  };

  return (
    <View style={styles.wrapper}>
      <LoginAndRegister/>
      <MenuList
        itemContainerStyle={styles.itemList}
        onPress={handlePress}
        items={menuItems}
        customAccessory={assetsImages.arrowRightBold}
        containerStyle={styles.menu}
        labelStyle={styles.menuItem}
        subLabelStyle={styles.menuItemSubText}
      />
    </View>
  );
};

export default GuestLanding;
