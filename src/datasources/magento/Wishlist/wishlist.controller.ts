import { Constructor } from '../Base/base.type';
import { WishlistTypes } from './wishlist.types';

export const WishlistController = <TBase extends Constructor>(Base: TBase) => {
  return class WishlistController extends Base {
    getWishlist =
      async (): Promise<WishlistTypes.Wishlist> => {
        const res = await this.get('/V1/crm/wishlist/me', {
          headers: await this.magentoHeaders()
        });
        if (res.status === 200) {
          return res.data;
        }
        throw Error(res.data);
      }
    addToWishlist = async (sku: string): Promise<WishlistTypes.WishlistItem> => {
      const res = await this.post('/V1/crm/wishlist/items', {
        sku,
        qty: 1,
        metadata: {custom_options: []}
      }, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }
    removeFromWishlist = async (id: string): Promise<boolean> => {
      const res = await this.delete(`/V1/crm/wishlist/items/${id}`, {
        headers: await this.magentoHeaders()
      });
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }
  };

};
