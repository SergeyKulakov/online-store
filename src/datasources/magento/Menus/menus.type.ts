export namespace MenuTypes {
  export namespace Menus {
    export interface RawResponse {
      _id?: number;
      node_id?: number;
      code?: string;
      type?: string;
      object_id?: string;
      parent_id?: number;
      position?: number;
      level?: number;
      title?: string;
      menu_title?: string;
      target?: string;
      url?: null;
      store?: string;
      css_classes?: null;
      max_items_for_column?: null;
      customer_group?: null;
    }

    export interface Response {
      id: string;
      parent_id: string;
      name: string;
      object_id: string;
      path: string;
      type: string;
    }
  }
}
