import { Controller, Get, Route } from "tsoa";
import { HelloWorld } from "../types";

@Route("test")
export class TestController extends Controller {
  @Get("hello")
  public async helloWorld(): Promise<HelloWorld> {
    return {
      hello: "world",
    };
  }
}
