import { Constructor } from '../Base';
import { StockAlertTypes } from './stockAlert.types';

export const StockAlertController = <TBase extends Constructor>(Base: TBase) => {
  return class StockAlertController extends Base {
    getStockAlerts = async (): Promise<StockAlertTypes.StockAlert[]> => {
      const res = await this.get('/V1/alert/stock', {
        headers: await this.magentoHeaders()
      });

      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    addStockAlert = async (productId: string | number, email: string): Promise<boolean> => {
      const res = await this.post(
        '/V1/alert/stock/subscribe',
        {product_id: productId, email},
        { headers: await this.magentoHeaders() }
        );
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }

    removeStockAlert = async (id: string): Promise<Boolean> => {
      const res = await this.delete(
        `/V1/alert/stock/subscribe/${id}`,
        {headers: await this.magentoHeaders()}
      );
      if (res.status === 200) {
        return res.data;
      }
      throw Error(res.data);
    }
  };
};
