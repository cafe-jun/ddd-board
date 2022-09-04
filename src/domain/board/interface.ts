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
