export namespace CustomerTypes {
  export interface Address {
    id: number;
    customer_id: number;
    region: {
      region_code: string;
      region_id: number;
      extension_attributes: unknown[];
    };
    region_id: number;
    country_id: string;
    street: string;
    company: string;
    telephone: string;
    fax: string;
    postcode: string;
    city: string;
    email: string;
    firstname: string;
    lastname: string;
    middlename: string;
    prefix: string;
    suffix: string;
    vat_id: string;
    default_shipping: boolean;
    default_billing: boolean;
    extension_attributes: unknown;
  }
  export interface CustomerInfo {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    prefix: string;
    suffix: string;
    gender: number;
    dob: string;
    taxvat: string;
    group_id: number;
    store_id: number;
    store: string;
    website_id: number;
    additional_info: unknown;
    addresses: Address[];
  }
}
