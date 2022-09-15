import { Board } from "./board";
import { IRepository } from "../../common/interface";
export interface IBoard {
  id: number;
  title: string;
  description: string;
  createTime: Date;
  updateTime: Date;
  deleteTime: Date;
}

export interface IBoardRepository extends IRepository<IBoard> {
  get(id: object | string | number, options?: any): Promise<IBoard>;
}

export interface ICreateBoardDto {
  title: string;
  description: string;
  toEntity(): Board;
}
export interface IUpdateBoardDto {
  id: number;
  title: string;
  description: string;
  toEntity(): Board;
  setBoardId(id: number): void;
}
