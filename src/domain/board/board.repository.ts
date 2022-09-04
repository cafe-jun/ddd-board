import { IBoard } from "./interface";
import {
  createQueryBuilder,
  EntityRepository,
  getConnection,
  InsertResult,
  Repository,
  UpdateResult,
} from "typeorm";
import { Board } from "../../entitiy/board.entity";

@EntityRepository(Board)
export class BoardRepository extends Repository<IBoard> {
  public get(id: number, options?: any): Promise<IBoard> {
    return super.findOneOrFail(id, options);
  }
  async addRow(board: Board): Promise<InsertResult> {
    return createQueryBuilder("board")
      .insert()
      .into(Board)
      .values({
        title: board.title,
        description: board.description,
      })
      .execute();
  }
  async updateRow(board: Board): Promise<UpdateResult> {
    return createQueryBuilder("board")
      .update(Board)
      .set({
        titlle: board.title,
        description: board.description,
      })
      .where("board.id = :id", { id: board.id })
      .execute();
  }
}
export function getBoardRepository() {
  const conn = getConnection();
  return conn.getCustomRepository(BoardRepository);
}
