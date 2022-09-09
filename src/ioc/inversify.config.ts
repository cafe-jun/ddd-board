import { BoardController } from "./../domain/board/board.controller";
import { AsyncContainerModule, interfaces } from "inversify";
import { Repository } from "typeorm";
import { getDbConnection } from "../config/typeorm.config";
import TYPES from "../constrant/types";
import { BoardService } from "../domain/board/board.service";
import { Board } from "../entitiy/board.entity";
import TAGS from "../constrant/tags";
import { getBoardRepository } from "../domain/board/board.repository";
import { IBoardRepository } from "../domain/board/interface";

export const bindings = new AsyncContainerModule(async (bind) => {
  await getDbConnection();
  await require("../domain/board/board.controller");
  bind<BoardService>(TYPES.Services.Application.Board)
    .to(BoardService)
    .inSingletonScope();
  bind<IBoardRepository>(TYPES.Repositories.Domain.Board)
    .toDynamicValue(() => {
      return getBoardRepository();
    })
    .inSingletonScope();
});
