export namespace CategoriesTypes {
  export namespace Categories {
    export interface Response {
      id?: string;
      parent_id?: string;
      created_at?: Date;
      updated_at?: Date;
      path?: string;
      position?: number;
      level?: string;
      children_count?: number;
      name?: string;
      category_seo_name?: null | string;
      childs?: number[];
      enabled?: string;
      permissions?: any[];
      docType?: string;
      description?: null | string;
      meta_title?: null | string;
      meta_keywords?: null;
      meta_description?: null | string;
      meta_robots?: null;
      include_in_menu?: string;
      exclude_from_search?: number;
      refilo_template?: null;
      full_name?: string;
      image?: null | string;
      mobile_image?: null;
      is_anchor?: number;
      all_children?: number[];
    }
  }
}
