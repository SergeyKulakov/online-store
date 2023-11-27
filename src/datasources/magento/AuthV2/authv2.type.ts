export namespace AuthV2Types {
  export namespace Init {
    export type Response = string;

  }

  export namespace Refresh {
    export type Response = string;

  }

  export namespace Clean {
    export interface Response {
      result: boolean;
    }

  }
}
