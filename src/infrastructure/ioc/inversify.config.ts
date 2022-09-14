import { AsyncContainerModule } from "inversify";
import { getDbConnection } from "../config/typeorm.config";
import TYPES from "../constrant/types";
import { BoardService } from "../domain/board/board.service";

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
