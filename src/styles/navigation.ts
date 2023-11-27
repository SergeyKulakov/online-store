import { Options } from 'react-native-navigation';
import { ActionButton, TopBarStyle } from '@brandingbrand/fsapp';

import { i18n, keys, navButtonsID } from '@assos/lib';

import palette from './colors';
import { assetsImages, font, fontFamily } from './variables';
import { OptionsBottomTab } from 'react-native-navigation/lib/src/interfaces/Options';

export const navDefault: Options = {
  layout: {
    backgroundColor: palette.systemBackgroundPrimary,
    orientation: ['portrait']
  },
  bottomTab: {
    iconColor: palette.iconTertiary,
    textColor: palette.textSecondary,
    fontSize: 13,
    selectedIconColor: palette.iconPrimary,
    selectedTextColor: palette.textPrimary,
    selectedFontSize: 13,
    badgeColor: palette.iconPrimary,
    fontFamily
  },
  bottomTabs: {
    backgroundColor: palette.systemBackgroundHeader,
    hideShadow: false,
    titleDisplayMode: 'alwaysShow',
    translucent: false
  },
  topBar: {
    backButton: {
      color: palette.textPrimary,
      showTitle: false,
      icon: assetsImages.backArrow
    },
    background: {
      color: palette.systemBackgroundHeader
    },
    elevation: 0,
    title: {
      fontFamily,
      color: palette.textPrimary,
      fontSize: 16,
      alignment: 'center'
    },
    subtitle: {
      fontFamily,
      color: palette.textPrimary,
      fontSize: 14,
      alignment: 'center'
    }
  }
};

export const headerSearch: ActionButton[] = [
  {
    id: navButtonsID.search,
    icon: assetsImages.search,
    text: i18n.string(keys.screenTitles.search),
    accessibilityLabel: i18n.string(keys.accessibility.searchBtn)
  }
];

export const headerBackToSearch: ActionButton[] = [
  {
    id: navButtonsID.backToSearch,
    icon: assetsImages.search,
    text: i18n.string(keys.screenTitles.search),
    accessibilityLabel: i18n.string(keys.accessibility.searchBtn)
  }
];

export const defaultTopBar: TopBarStyle = {
  backButton: {
    showTitle: false,
    icon: assetsImages.backArrow,
    color: '#000'
  },
  background: {
    color: palette.systemBackgroundHeader
  },
  elevation: 0,
  title: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 16,
    alignment: 'center'
  },
  subtitle: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 14,
    alignment: 'center'
  }
};

export const darkTopBar: TopBarStyle = {
  backButton: {
    showTitle: false,
    icon: assetsImages.arrowBack,
    color: palette.textButtonLabelPrimary
  },
  background: {
    color: palette.headerBackgroundPIP
  },
  elevation: 0,
  title: {
    fontFamily: font.orbitronRegular,
    color: '#fff',
    fontSize: 16,
    alignment: 'center'
  },
  subtitle: {
    fontFamily: font.orbitronRegular,
    color: '#fff',
    fontSize: 14,
    alignment: 'center'
  },
  visible: true,
  height: 64
};

export const headerNoDivider: TopBarStyle = {
  noBorder: true
};

export const navWebView: TopBarStyle = {
  backButton: {
    showTitle: false,
    icon: assetsImages.backArrow,
    color: '#000'
  },
  background: {
    color: palette.systemBackgroundHeader
  },
  elevation: 0,
  title: {
    fontFamily,
    color: palette.textPrimary,
    fontSize: 16,
    alignment: 'center'
  }
};

export const topBarHidden = {
  visible: false
};

export const modal: Options = {
  topBar: {
    rightButtons: [{
      id: 'header-close-btn',
      icon: assetsImages.closeBlack,
      text: i18n.string(keys.screenTitles.search),
      accessibilityLabel: i18n.string(keys.accessibility.searchBtn)
    }],
    noBorder: true,
    title: {
      fontFamily,
      color: palette.textPrimary,
      fontSize: 16,
      fontWeight: 'bold',
      alignment: 'center'
    }
  }
};

export const tabsStyle: OptionsBottomTab = {
  iconColor: palette.iconInactive,
  textColor: palette.iconInactive,
  selectedIconColor: palette.iconActive,
  selectedTextColor: palette.iconActive,
  fontWeight: 'medium',
  fontSize: 13
};
