export namespace WishlistTypes {
  export interface WishlistItem {
    id: string;
    sku: string;
    qty: number;
    product_data: unknown;
    metadata: unknown;
    totals: unknown;
  }

  export interface Wishlist {
    id: string;
    store: string;
    items: WishlistItem[];
    items_count: number;
    items_qty: number;
  }

  export interface WishlistAddResponse {
    sku: string;
    qty: number;
    product_data: {
      sku?: string;
      pricing?: {
        final_price: number;
        max_price: number;
        min_price: number;
        base_price: number;
      };
      inventory: unknown;
      attributes: unknown;
    };
  }
}
