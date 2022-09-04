import * as express from "express";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  httpPut,
  queryParam,
  requestBody,
  request,
  response,
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { BoardService } from "./board.service";
import TYPES from "../../constrant/types";
import { CreateBoardDto } from "../dto/create-board.dto";
import { ICreateBoardDto } from "./interface";
import { DtoValidatorMiddleware } from "../../middleware/dto-validator.middleware";
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
  public createBoard(@requestBody() param: ICreateBoardDto) {
    DtoValidatorMiddleware(CreateBoardDto, true);
    console.log(param);
    // return this.boardService.addBoard();
  }

  @httpPut("/")
  public update(): void {
    // return this.boardService.updateBoard();
  }

  @httpDelete("/")
  public delete(): string {
    return this.boardService.deleteBoard();
  }
}
