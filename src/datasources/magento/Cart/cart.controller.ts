import { Constructor } from '../Base/base.type';

export const CartController = <TBase extends Constructor>(Base: TBase) => {
  return class CartController extends Base {
    fetchCart = async () => {
      const res = await this.get(`/V1/sales/cart/items`, {
        headers: await this.magentoHeaders()
      });
      return res.data;
    }

    addItemToCart = async (sku: string, qty: number, sizeKey: string) => {
      const res = await this.post(
        `/V1/sales/cart/items`,
        {
          sku,
          qty,
          metadata: {
            configurable_options: [
              {
                option_id: 204,
                option_value: sizeKey
              }
            ]
          }
        },
        { headers: await this.magentoHeaders()}
      );
      return res.data;
    }

    addVariantToCart = async (sku: string, qty: number) => {
      const res = await this.post(
        `/V1/sales/cart/items`,
        {
          sku,
          qty
        },
        { headers: await this.magentoHeaders() }
      );
      return res.data;
    }
  };
};
