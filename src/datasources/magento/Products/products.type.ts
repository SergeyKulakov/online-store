import { TechnologyOverview } from '@assos/components/PDP/TechnologyOverview/types';

export namespace ProductControllersTypes {
  export interface Assets {
    images: ProductImage;
    placeholders: {
      image: string;
      media_technology: string;
      small_image: string;
      thumbnail: string;
    };
    galleries: unknown;
  }
  export interface ColorDetails {
    id: number;
    title: string;
    assets: Assets;
    childs: number[];
    value: string;
    key: number;
    type: string;
    image: string;
    swatch: {
      type: string;
      value: string;
    };
  }
  export interface Value {
    swatch: {
      type: string;
      value: string;
    };
    value_index: number;
    label: string;
  }

  export interface Variant {
    id: number;
    type: string;
    position: 0;
    label: string;
    use_default: number;
    attribute_id: number | string;
    attribute_code: string;
    values: Value[];
    options: number[];
    rendered: string;
    update_product_media: number;
  }
  export interface ProductImage {
    hide_from_gallery: boolean;
  }
  export interface Product {
    description: string;
    _id: string;
    id: number;
    sku: string;
    name: string;
    enabled: string;
    type: string;
    created_at: string;
    updated_at: string;
    assets: Assets;
    attributes: {
      id_size_guide: {
        value: string | null;
      };
      product_label: {
        value: string | null;
        title: string;
      };
      category_level_2: {
        key: string;
        title: string;
        value: string;
      };
      description: any;
      color_details: ColorDetails;
      name: {
        title: string;
        value: string;
      };
      size: {
        key: string;
        title: string;
        value: string[];
      };
      additionalProp1: unknown;
      composition: {
        value: string;
      };
      technology: TechnologyOverview;
      technology1: TechnologyOverview;
      technology2: TechnologyOverview;
      technology3: TechnologyOverview;
      technology4: TechnologyOverview;
      technology5: TechnologyOverview;
      technology6: TechnologyOverview;
      technology7: TechnologyOverview;
      technology8: TechnologyOverview;
      technology9: TechnologyOverview;
      technology10: TechnologyOverview;
      gender: {
        title: string;
        value: string;
        key: string;
      };
    };
    categories: number[];
    visible: string;
    filters: {
      title: string;
      value: [string];
      key: [string];
      type: string;
      image: string;
      additionalProp1: unknown;
      collections: {
        title: string;
        value: string[];
      };
      ride: {
        title: string;
        value: string[];
      };
      season_type: {
        title: string;
        value: string[];
      };
      size: {
        title: string;
        key: string[];
        value: string[];
      };
    };
    pricing: {
      final_price: number;
      max_price: number;
      min_price: number;
      base_price: number;
      groups: unknown;
    };
    sortables: {
      name: {
        _id: string;
        label: string;
        code: string;
        values: [string];
      };
    };
    inventory: {
      in_stock: boolean;
      backorders: number;
      saleable: string;
    };
    childs: [0];
    variants: Variant[];
    bundle: [
      {
        id: number;
        title: string;
        required: number;
        type: string;
        position: number;
        childs: [
          {
            id: number;
            product_id: number;
            qty: number;
            is_default: number;
            can_change_quantity: number;
          }
        ];
      }
    ];
    additionalProp1: unknown;
    colorSwatches: ColorDetails[];
  }

  export interface Query {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: string[];
    where?: {
      idx?: string;
      _id?: string;
      sku?: string | { inq: string[] };
      name?: string;
      type?: string;
      created_at?: Date;
      updated_at?: Date;
      visible?: string;
      categories?: string;
      and?: any[];
    };
    fields?: {
      _id?: boolean;
      sku?: boolean;
      name?: boolean;
      enabled?: boolean;
      type?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      assets?: boolean;
      attributes?: boolean;
      categories?: boolean;
      visible?: boolean;
      filters?: boolean;
      pricing?: boolean;
      sortables?: boolean;
      inventory?: boolean;
      childs?: boolean;
      variants?: boolean;
      bundle?: boolean;
    };
  }

  export interface VariantsQuery {
    where: {
      name: string;
      visible: string;
    };
  }

  export type Response = Product[];
}
