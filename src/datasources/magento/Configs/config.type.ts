export namespace ConfigControllerTypes {
  export namespace Bootstrap {
    export interface StoreHost {
      id: string;
      code: string;
      name: string;
      locale: string;
      base_url: string;
      marketplace_name: string;
    }

    export interface Response {
      metadata?: Metadata;
      stores_list_hosts?: StoresListHost[];
      store_list?: string[];
    }

    export interface Metadata {
      code?: string;
      name?: string;
      base_url?: string;
      locale?: Locale;
      marketplace?: string;
      id?: number;
      storefrontConfig?: StorefrontConfig;
      isoCode?: string;
      marketplace_id?: number;
      marketplace_name?: string;
      currencies?: Currency[];
      configs?: Configs;
      enabled?: string;
    }

    export interface Configs {
      default_currency?: string;
      store_information?: StoreInformation;
      billing_countries?: string[];
      shipping_countries?: string[];
      europe_countries?: string[];
      default_country?: string;
    }

    export interface StoreInformation {
      name?: string;
      phone?: null;
      hours?: string;
      country_id?: string;
      region_id?: string;
      postcode?: string;
      city?: string;
      street_line1?: string;
      street_line2?: null;
      merchant_vat_number?: null;
    }

    export interface Currency {
      code?: string;
    }

    export interface Locale {
      code?: Code;
      name?: Code;
      firstday?: string;
      weekend?: string;
      datetime_format_long?: string;
      datetime_format_medium?: string;
      datetime_format_short?: string;
      date_format_long?: string;
      date_format_medium?: string;
      date_format_short?: string;
      language?: string;
      timezone?: string;
      weight_unit?: string;
    }

    export enum Code {
      DeDE = 'de_DE',
      EnUS = 'en_US',
      EsES = 'es_ES',
      FrFR = 'fr_FR',
      ItIT = 'it_IT'
    }

    export interface StorefrontConfig {
      sales?: Sales;
      general?: General;
      catalog?: Catalog;
      notification?: BuiltinSearchMetrics;
      geoip?: Geoip;
      search?: Search;
      google_tag_manager?: GoogleTagManager;
      builtin_search_metrics?: BuiltinSearchMetrics;
      rich_snippet?: RichSnippet;
      seo?: SEO;
      storelocator?: Storelocator;
      content?: Content;
      maintenance?: Maintenance;
      social?: Social;
      newsletter_popup?: NewsletterPopup;
      customer?: Customer;
      google_recaptcha?: GoogleRecaptcha;
      security?: Security;
      reward_points_ext?: RewardPointsEXT;
    }

    export interface BuiltinSearchMetrics {
      enabled?: boolean;
    }

    export interface Catalog {
      url_key_suffix?: string;
      not_seo_friendly_urls?: string;
      hide_price?: boolean;
      disable_shop?: boolean;
      vat_label?: string;
      shipping_returns_info?: string;
      customer_care_info?: string;
      categories?: Categories;
      products?: Products;
    }

    export interface Categories {
      products_per_page?: number;
      pagination_param?: string;
      sort_filter_name?: string;
      multiple_filter_divider?: string;
      history_pagination_push?: boolean;
      history_filter_push?: boolean;
      price_filter_name?: string;
      price_filter_render?: string;
      pagination_mapping?: any[];
      enable_macro_categories?: boolean;
      load_all_previous_products?: boolean;
      show_filter_count?: boolean;
    }

    export interface Products {
      image_size?: ImageSize;
      use_demo_placeholder?: boolean;
      enable_product_compare?: boolean;
      max_comparable_products?: number;
      comparable_attributes?: string;
      enable_recently_viewed_products?: boolean;
      max_recently_viewed_products?: number;
      rating?: boolean;
      rating_guest?: boolean;
      options?: Options;
      enable_oos_notifications?: boolean;
    }

    export interface ImageSize {
      width?: number;
      height?: number;
    }

    export interface Options {
      enable_expand?: boolean;
      expand_limit_options?: number;
      visible_height?: string;
    }

    export interface Content {
      pages?: Pages;
      html_head?: HTMLHead;
      footer?: Footer;
      search_engine_robots?: SearchEngineRobots;
    }

    export interface Footer {
      misc_html?: string;
    }

    export interface HTMLHead {
      default_title?: string;
      demonotice?: boolean;
      meta_keywords?: string;
      include_script?: string;
      title_prefix?: string;
      title_suffix?: string;
      meta_description?: string;
      favicon?: string;
    }

    export interface Pages {
      not_seo_friendly_urls?: string;
    }

    export interface SearchEngineRobots {
      default_robots?: string;
      custom_instructions?: string;
    }

    export interface Customer {
      address_validation?: AddressValidation;
      reward_points?: RewardPoints;
    }

    export interface AddressValidation {
      firstname_lastname_sum?: number;
      firstname_length?: number;
      lastname_length?: number;
      street_length?: number;
      postcode_length?: number;
      city_length?: number;
      region_length?: number;
    }

    export interface RewardPoints {
      is_enabled?: boolean;
      unique_url_enable?: boolean;
    }

    export interface General {
      site_name?: string;
      copyright?: string;
      top_strip?: string;
      disclaimers?: Disclaimers;
      address_autocomplete?: AddressAutocomplete;
      zendesk?: Zendesk;
      whatsapp?: Whatsapp;
      restriction?: Restriction;
      locale?: Locale;
      marketplace?: string;
      marketplace_name?: string;
      default_currency?: string;
      default_country?: string;
      media_base_url?: string;
      all_countries?: string[];
      optional_zip_countries?: string[];
      shipping_countries?: string[];
      country_url?: any[];
    }

    export interface AddressAutocomplete {
      enabled?: boolean;
      api_key?: string;
    }

    export interface Disclaimers {
      terms_and_conditions?: string;
      marketing?: string;
      profiling?: string;
      privacy_policy?: string;
      cookie_policy?: string;
      address?: Address;
      checkout?: DisclaimersCheckout;
      contacts_form?: string;
      work_with_us_form?: string;
      out_of_stock_notification?: string;
      shorts_finder_privacy?: string;
    }

    export interface Address {
      street_additional_label?: string;
      company_additional_label?: string;
    }

    export interface DisclaimersCheckout {
      rassurance_info?: string;
      custom_duties_disclaimer?: string;
    }

    export interface Restriction {
      is_active?: boolean;
      mode?: number;
      startup_page?: number;
      landing_page?: string;
      http_response?: number;
      allowed_path?: string;
    }

    export interface Whatsapp {
      number?: string;
      prefilled?: string;
    }

    export interface Zendesk {
      script_src?: string;
      departments?: any[];
      preselected_department?: string;
    }

    export interface Geoip {
      enabled?: boolean;
      popup?: boolean;
      geoinfo_cookie_name?: string;
      geoinfo_cookie_age?: number;
      misfits?: boolean;
      misfits_cookie_name?: string;
      misfits_cookie_age?: number;
    }

    export interface GoogleRecaptcha {
      enabled?: boolean;
      site_key?: string;
      secret_key?: string;
      api_enabled?: string;
      bypass_ips?: string;
      score?: number;
    }

    export interface GoogleTagManager {
      enabled?: boolean;
      code?: string;
    }

    export interface Maintenance {
      enabled?: boolean;
      allowed_urls?: string;
      allowed_ips?: string;
      page_title?: string;
      bg_image?: string;
      front_text?: string;
      bg_image_mobile?: string;
    }

    export interface NewsletterPopup {
      enabled?: boolean;
      auto_open?: boolean;
      close_timeout?: number;
      open_timeout?: number;
      cookie_name?: string;
      cookie_lifetime?: number;
      disabled_paths?: any[];
      visited_before_open?: string;
      fields?: Fields;
    }

    export interface Fields {
      firstname?: Country;
      lastname?: Country;
      dob?: Country;
      gender?: Collections;
      country?: Country;
      collections?: Collections;
      phone?: Country;
    }

    export interface Collections {
      enabled?: boolean;
      required?: boolean;
      list?: List[];
    }

    export interface List {
      code?: string;
      label?: string;
    }

    export interface Country {
      enabled?: boolean;
      required?: boolean;
    }

    export interface RewardPointsEXT {
      custom_amount_enabled?: boolean;
      minimum_point?: number;
      minimum_amount?: number;
    }

    export interface RichSnippet {
      organization?: Organization;
      product?: Product;
    }

    export interface Organization {
      logo?: string;
    }

    export interface Product {
      brand?: string;
    }

    export interface Sales {
      payments?: Payments;
      gift_message?: BuiltinSearchMetrics;
      gift_wrap?: BuiltinSearchMetrics;
      gift_cards?: BuiltinSearchMetrics;
      checkout?: SalesCheckout;
      tax?: Tax;
      rma?: Rma;
    }

    export interface SalesCheckout {
      pickup_in_store?: BuiltinSearchMetrics;
      disable_terms_and_conditions?: boolean;
      invoice?: Invoice;
    }

    export interface Invoice {
      enabled?: boolean;
      config?: any[];
    }

    export interface Payments {
      adyen?: Adyen;
      apple?: Apple;
      google?: Google;
      banktransfer?: Banktransfer;
      klarna?: Klarna;
    }

    export interface Adyen {
      mode?: string;
      js_test?: string;
      js_live?: string;
      css_test?: string;
      css_live?: string;
      cc?: Cc;
      merchant_account?: string;
      client_key?: string;
      key_type?: string;
    }

    export interface Cc {
      enableStoreDetails?: boolean;
      hasHolderName?: boolean;
      holderNameRequired?: boolean;
      brands?: string[];
    }

    export interface Apple {
      apple_developer_merchantid_domain_association?: string;
      apple_merchant_id_test?: string;
      apple_merchant_id_live?: string;
    }

    export interface Banktransfer {
      active?: boolean;
      instruction?: null;
    }

    export interface Google {
      google_merchant_id?: string;
    }

    export interface Klarna {
      osm_enabled?: boolean;
      client_id?: string;
      script_url?: string;
      product_page_enabled?: boolean;
      product_page_placement?: string;
      cart_page_enabled?: boolean;
      cart_page_placement?: string;
    }

    export interface Rma {
      enabled?: boolean;
      easy_return?: EasyReturn;
    }

    export interface EasyReturn {
      enabled?: boolean;
      general_description_cms_block_identifier?: null;
      easy_rma_description_cms_block_identifier?: null;
      easy_rma_description2_cms_block_identifier?: null;
      normal_rma_description_cms_block_identifier?: null;
    }

    export interface Tax {
      display_summary?: boolean;
      display_zero?: boolean;
    }

    export interface Search {
      recommendations?: boolean;
      recommendations_limit?: number;
      search_suggestion_enabled?: boolean;
      search_suggestion_count?: number;
      recommendations_suggestion_enabled?: boolean;
    }

    export interface Security {
      csp?: CSP;
    }

    export interface CSP {
      enabled?: boolean;
      report_only?: boolean;
      report_uri?: string;
      base_uri?: string;
      default_src?: string;
      child_src?: string;
      connect_src?: string;
      manifest_src?: string;
      media_src?: string;
      object_src?: string;
      style_src?: string;
      script_src?: string;
      img_src?: string;
      frame_src?: string;
      frame_ancestors?: string;
      form_action?: string;
      font_src?: string;
    }

    export interface SEO {
      serp_thumbnail?: string;
    }

    export interface Social {
      login?: Login;
    }

    export interface Login {
      facebook_app_id?: string;
      google_client_id?: string;
      apple_client_id?: string;
    }

    export interface Storelocator {
      enabled?: boolean;
      key?: string;
      details?: BuiltinSearchMetrics;
      autocomplete?: Autocomplete;
      tags?: BuiltinSearchMetrics;
      map?: Map;
      geolocation?: Geolocation;
      marker?: Marker;
      product_in_store?: ProductInStore;
    }

    export interface Autocomplete {
      enabled?: boolean;
      type?: string;
      zoom?: number;
    }

    export interface Geolocation {
      enabled?: boolean;
      zoom?: number;
      distance?: boolean;
      directions?: boolean;
      travel_mode?: string;
    }

    export interface Map {
      default_center?: string;
      default_zoom?: number;
      min_zoom?: number;
      max_zoom?: number;
      type?: string;
      style?: string;
      controls?: Controls;
    }

    export interface Controls {
      zoom?: boolean;
      map_type?: boolean;
      street_view?: boolean;
      rotate?: boolean;
      scale?: boolean;
      fullscreen?: boolean;
    }

    export interface Marker {
      image?: string;
      cluster_image?: string;
    }

    export interface ProductInStore {
      enable_product_in_store?: boolean;
    }

    export interface StoresListHost {
      _id?: string;
      code?: string;
      name?: string;
      locale?: Code;
      base_url?: string;
      marketplace_id?: number;
      marketplace_name?: string;
    }
  }

  export namespace Redirects {
    export interface Redirect {
      _id: number;
      host: string;
      request_url: string;
      target_url: string;
      redirect_code: number;
    }

    export type Response = Redirect[];
  }
}
