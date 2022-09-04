import { getConnection } from "typeorm";
import { getDataSource } from "../../config/typeorm.config";
import { Board } from "../../entitiy/board.entity";

export function getRepository() {
  const conn = getDataSource();
  const boardRepository = conn.getRepository(Board);
  return boardRepository;
}
