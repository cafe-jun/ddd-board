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
  requestParam,
} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { BoardService } from "./board.service";
import TYPES from "../../constrant/types";
import { CreateBoardDto } from "../dto/create-board.dto";
import { ICreateBoardDto } from "./interface";
import { DtoBodyValidatorMiddleware } from "../../middleware/dto-body-validator.middleware";
import { ParamPaserIntMiddleware } from "../../middleware/param-parserInt.middleware";
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

  @httpPost("/", DtoBodyValidatorMiddleware(CreateBoardDto))
  public createBoard(@requestBody() params: ICreateBoardDto) {
    return this.boardService.addBoard(params.toEntity());
  }

  @httpPut("/:id", ParamPaserIntMiddleware("id"))
  public update(
    @requestParam("id") id: string,
    @requestBody() params: ICreateBoardDto
  ): void {
    console.log(typeof id);
    console.log(params);
    // return this.boardService.updateBoard();
  }

  @httpDelete("/")
  public delete(): string {
    return this.boardService.deleteBoard();
  }
}
