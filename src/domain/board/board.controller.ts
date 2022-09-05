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
import { ICreateBoardDto, IUpdateBoardDto } from "./interface";
import { DtoBodyValidatorMiddleware } from "../../middleware/dto-body-validator.middleware";
import { GetByIdParams, IGetByIdParams } from "../../common/get-by.params";
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
  @httpPut("/:id", DtoBodyValidatorMiddleware(CreateBoardDto))
  public update(
    // Param 으로 받기
    //https://github.com/inversify/InversifyJS/issues/936
    @requestParam("id") param: IGetByIdParams,
    @requestBody() boardDto: IUpdateBoardDto,
    res: express.Response
  ) {
    boardDto.setBoardId(param.ID);
    return this.boardService.updateBoard(boardDto.toEntity());
  }

  @httpDelete("/")
  public delete(): string {
    return this.boardService.deleteBoard();
  }
}
