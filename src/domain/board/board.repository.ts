import { IBoard } from "./interface";
import { EntityRepository, getConnection, Repository } from "typeorm";
import { Board } from "../../entitiy/board.entity";

@EntityRepository(Board)
export class BoardRepository extends Repository<IBoard> {
  public get(id: number, options?: any): Promise<IBoard> {
    return super.findOneOrFail(id, options);
  }
}
export function getBoardRepository() {
  const conn = getConnection();
  return conn.getCustomRepository(BoardRepository);
}
