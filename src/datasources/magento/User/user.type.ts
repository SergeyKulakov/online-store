export namespace UserType {
  export namespace Register {
    export interface Request {
      email: string;
      firstname: string;
      lastname: string;
      password: string;
      dob?: string;
      is_subscribed: boolean;
      additional_info: unknown;
    }

    export interface Response {
      id: string;
      email: string;
      dob?: string;
      firstname: string;
      lastname: string;
      permissions: string;
      group_id: number;
      store_id: number;
      store: string;
      cart_id: string;
      password: string;
      website_id: string;
      customer_type: string;
      is_subscribed: boolean;
      additional_info: unknown;
    }
  }

  export namespace Login {
    export interface Request {
      email: string;
      password: string;
    }
  }

  export namespace Logout {
    export interface Request {
      sid: string;
    }
  }

  export namespace Delete {
    export interface Request {
      email: string;
      store: string;
    }
  }

  export interface Token {
    id: string;
    sub: string;
    iss: string;
    jti: string;
    additionalClaims: unknown;
    iat: string;
    exp: string;
  }
}
