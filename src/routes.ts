import { ActivatedRoute, Routes } from '@brandingbrand/fsapp';

import { darkTopBar, defaultTopBar, headerNoDivider, topBarHidden } from '@assos/styles';
import { Account, Cart, Discover, Shop } from './tabs';
import { isIos } from '@assos/helpers';
import { i18n, keys } from '@assos/lib';

const TITLE = 'Assos';


const getDynamicTitle = ({ query, data }: ActivatedRoute) => {
  const title = data.title ?? query.title;
  return typeof title === 'string' ? title : '';
};

export const routes: Routes = [
  {
    initialPath: 'discover',
    tab: Discover,
    exact: true,
    children: [
      {
        path: 'discover',
        exact: true,
        title: TITLE,
        loadComponent: () =>
          import('@assos/screens').then(({ Discover }) => Discover),
        topBarStyle: topBarHidden,
        statusBarStyle: { style: 'light' }
      },
      {
        path: 'discover/:id',
        title: 'discover',
        exact: true,
        loadComponent: () =>
        import('@assos/screens').then(({ DiscoverStory}) => DiscoverStory)
      }
    ]
  },
  {
    initialPath: 'shop',
    tab: Shop,
    children: [
      {
        path: 'shop',
        title: 'Shop',
        loadComponent: () => import('@assos/screens').then(({ Shop }) => Shop),
        topBarStyle: topBarHidden
      },
      {
        path: 'shop/search',
        loadComponent: () =>
          import('@assos/screens').then(({ SearchScreen }) => SearchScreen),
        topBarStyle: topBarHidden
      },
      {
        path: 'shop/product/:productId',
        title: 'Product',
        loadComponent: () => import('@assos/screens').then(({PDP}) => PDP),
        topBarStyle: topBarHidden
      },
      {
        path: 'shop/pindex/',
        title: 'Product',
        loadComponent: () =>
          import('@assos/screens').then(({ ProductIndex }) => ProductIndex),
        topBarStyle: topBarHidden,
        statusBarStyle: { style: 'light' }
      }
    ]
  },
  {
    path: 'welcome',
    topBarStyle: topBarHidden,
    // exact: true,
    loadComponent: async () =>
      import('@assos/screens').then(({ WelcomeScreen }) => WelcomeScreen)
  },
  {
    initialPath: 'cart',
    tab: Cart,
    topBarStyle: topBarHidden,
    children: [
      {
        path: 'cart',
        title: 'Cart',
        loadComponent: () =>
          import('@assos/screens').then(({ CartScreen }) => CartScreen),
        topBarStyle: topBarHidden
      }
    ]
  },
  {
    initialPath: 'account',
    tab: Account,
    children: [
      {
        path: 'account',
        title: i18n.string(keys.screenTitles.account).toUpperCase(),
        loadComponent: () =>
          import('@assos/screens/Account').then(({ Account }) => Account),
        topBarStyle: { ...defaultTopBar, ...headerNoDivider }
      },
      {
        path: 'account/settings',
        title: 'App Settings'.toUpperCase(),
        loadComponent: () =>
          import('@assos/screens/Settings').then(({ Settings }) => Settings),
        topBarStyle: (isIos ? topBarHidden : { ...darkTopBar })
      },
      {
        path: 'account/delete',
        title: 'DELETE ACCOUNT',
        loadComponent: async () =>
          import('@assos/screens').then(({ DeleteAccount }) => DeleteAccount),
        topBarStyle: (isIos ? topBarHidden : { ...darkTopBar })
      },
      {
        path: 'account/stylePreferences',
        title: i18n.string(keys.screenTitles.stylePreferences),
        exact: true,
        loadComponent: async () =>
          import('@assos/screens').then(
            ({ StylePreferences }) => StylePreferences
          ),
        topBarStyle: (isIos ? topBarHidden : { ...darkTopBar })
      },
      {
        path: 'account/webview/:route',
        title: getDynamicTitle,
        exact: true,
        loadComponent: async () =>
          import('@assos/screens').then(
            ({ AccountWebViewScreen }) => AccountWebViewScreen
          ),
        topBarStyle: (isIos ? topBarHidden : { ...darkTopBar })
      },
      {
        path: 'account/notification',
        title: i18n.string(keys.screenTitles.notificationPreferences),
        exact: true,
        loadComponent: async () =>
          import('@assos/screens').then(
            ({ NotificationPreferences }) => NotificationPreferences
          ),
        topBarStyle: (isIos ? topBarHidden : { ...darkTopBar })
      }
    ]
  },
  {
    path: 'external',
    title: ({data}) => (typeof data.title === 'string' ? data.title : ''),
    loadComponent: () => import('@assos/screens').then(({External}) => External)
  },
  {
    title: 'Page Not Found',
    loadComponent: () =>
      import('@assos/screens/NotFound').then(({ NotFound }) => NotFound),
    topBarStyle: { ...defaultTopBar }
  },
  {
    path: 'quick-access',
    title: 'Dev',
    quickDevMenu: true,
    loadComponent: () =>
      import('@assos/screens').then(({ Development }) => Development),
    topBarStyle: headerNoDivider
  }
];
