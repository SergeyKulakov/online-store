import { ProductControllersTypes } from '../Products';
export namespace StockAlertTypes {
  export interface StockAlert {
    add_date: string;
    customer_email: string;
    id: number;
    is_guest: boolean;
    parend_id: number;
    product_data: ProductControllersTypes.Product;
    product_id: number;
    send_count: number;
    status: string;
    store_id: number;
    website_id: number;
  }
}
