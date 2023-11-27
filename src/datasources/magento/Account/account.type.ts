export namespace AccountTypes {
  export namespace CheckEmail {
    export interface Request {
      customerEmail: string;
    }

    export type Response = boolean;
  }

  export namespace PasswordForgot {
    export interface Request {
      email: string;
    }

    export type Response = boolean;
  }

  export namespace PasswordReset {
    export interface Request {
      customer_id: number;
      reset_token: string;
      new_password: string;
    }

    export type Response = boolean;
  }
}
