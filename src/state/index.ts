import * as Cart from './cart';
import * as User from './user';
import * as Config from './config';
import * as Product from './product';
import * as Wishlist from './wishlist';
import * as StockAlert from './stockAlert';
import * as RecentlyViewed from './recentlyViewed';
import * as Categories from './categories';

export interface AppStore {
  cart: Cart.CartStore;
  config: Config.ConfigStore;
  user: User.UserStore;
  product: Product.ProductStore;
  stockAlert: StockAlert.StockAlertStore;
  wishlist: Wishlist.WishlistStore;
  recentlyViewed: RecentlyViewed.RecentlyViewedStore;
  categories: Categories.CategoryStore;
}

export const reducers = {
  cart: Cart.reducer,
  config: Config.reducer,
  user: User.reducer,
  product: Product.reducer,
  stockAlert: StockAlert.reducer,
  wishlist: Wishlist.reducer,
  recentlyViewed: RecentlyViewed.reducer,
  categories: Categories.reducer
};
