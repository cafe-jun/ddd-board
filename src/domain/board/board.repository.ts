import { IBoard } from "./interface";
import {
  createQueryBuilder,
  DeleteResult,
  EntityRepository,
  getConnection,
  InsertResult,
  Repository,
  UpdateResult,
} from "typeorm";
import { Board } from "../../entitiy/board.entity";

interface IGetBoardResult {
  id: number;
  title: string;
  description: string;
}

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
  async deleteRow(id: number): Promise<DeleteResult> {
    return this.softDelete({ id });
  }
  async getById(id: number): Promise<IGetBoardResult> {
    return createQueryBuilder()
      .select(["board.id", "board.title", "board.description"])
      .from(Board, "board")
      .where("board.id = :id", { id })
      .getOne();
  }
  async pagin(): Promise<IGetBoardResult[]> {
    return createQueryBuilder()
      .select(["board.id", "board.title", "board.description"])
      .from(Board, "board")
      .getMany();
  }
}
export function getBoardRepository() {
  const conn = getConnection();
  return conn.getCustomRepository(BoardRepository);
}
