export namespace $Enums {
  export const Test = {
    hello: "world",
    foo: "bar",
  };
  export type Test = (typeof $Enums.Test)[keyof typeof $Enums.Test];
}

export interface HelloWorld {
  hello: $Enums.Test;
}
