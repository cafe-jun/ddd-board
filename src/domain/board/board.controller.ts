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
  httpPut,
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { BoardService } from "./board.service";
import TYPES from "../../constrant/types";
@controller("/board")
export class BoardController implements interfaces.Controller {
  constructor(
    @inject(TYPES.Services.Application.Board) private boardService: BoardService
  ) {}

  @httpGet("/")
  public pagin() {
    // return "success";
    return this.boardService.getBoard();
  }
  @httpGet("/:id")
  public detail(): string {
    return this.boardService.getDetailBoard();
  }
  @httpPost("/")
  public add(): string {
    return this.boardService.addBoard();
  }

  @httpPut("/")
  public update(): string {
    return this.boardService.updateBoard();
  }

  @httpDelete("/")
  public delete(): string {
    return this.boardService.deleteBoard();
  }
}
