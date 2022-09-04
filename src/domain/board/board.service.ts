import { inject, injectable } from "inversify";
import { provide } from "inversify-binding-decorators";
import { Repository } from "typeorm";
import TYPES from "../../constrant/types";
import { Board } from "../../entitiy/board.entity";
import { BoardRepository } from "./board.repository";

@injectable()
export class BoardService {
  constructor(
    @inject(TYPES.Repositories.Domain.Board)
    private boardRepository: Repository<Board>
  ) {}

  public async getBoard(): Promise<Board[]> {
    console.log("service here");
    const data = await this.boardRepository.find();
    return data;
  }
  public search(): string {
    return "search";
  }
  public addBoard(): string {
    return "addBoard";
  }
  public updateBoard(): string {
    return "updateBoard";
  }
  public deleteBoard(): string {
    return "deleteBoard";
  }
  public getBoardList(): string {
    return "getBoardList";
  }
  public getDetailBoard(): string {
    return "getDetailBoard";
  }
}
