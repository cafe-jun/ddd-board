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
import { BoardService } from "./board.service";
import TYPES from "../../constrant/types";
@controller("/board")
export class BoardController implements interfaces.Controller {
  constructor(@inject(TYPES.BoardService) private boardService: BoardService) {}

  @httpGet("/")
  public getFoo(): string {
    return this.boardService.getBoard();
  }
}
