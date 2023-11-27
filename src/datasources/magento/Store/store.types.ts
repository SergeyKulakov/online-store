export namespace StoreControllerTypes {
  export interface Response {
    id: string;
    metacode: string;
    metadata: {
      code: string;
      name: string;
      base_url: string;
      locale: {
        code: string;
        name: string;
        id: string;
      };
      currencies: { code: string }[];
      marketplace: string;
    };
  }
}
