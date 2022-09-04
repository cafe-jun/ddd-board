import { AsyncContainerModule } from "inversify";
import { Repository } from "typeorm";
// import { Movie } from "./entities/movie";
import { getDataSource } from "./typeorm.config";
// import { getRepository } from "./repositories/movie_repository";
import TYPES from "../constrant/types";
import { BoardService } from "../domain/board/board.service";
import { Board } from "../entitiy/board.entity";
import { getRepository } from "../domain/board/board.repository";

export const bindings = new AsyncContainerModule(async (bind) => {
  await getDataSource()
    .initialize()
    .then(() => console.log("database connection"))
    .catch((error) => console.error(error));

  bind<BoardService>(TYPES.BoardService).to(BoardService);
  bind<Repository<Board>>(TYPES.BoardRepository)
    .toDynamicValue(() => {
      return getRepository();
    })
    .inRequestScope();
});
