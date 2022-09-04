import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { FooService } from "./foo.service";
import TYPES from "../../constrant/types";
@controller("/")
export class FooController implements interfaces.Controller {
  constructor(@inject(TYPES.FooService) private fooService: FooService) {}

  @httpGet("foo")
  public getFoo(): string {
    return this.fooService.getFoo();
  }
}
