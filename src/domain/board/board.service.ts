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
    private boardRepository: BoardRepository
  ) {}

  public async getBoard(): Promise<Board[]> {
    console.log("service here");
    const data = await this.boardRepository.find();
    return data;
  }
  public search(): string {
    return "search";
  }
  public async addBoard(dto: Board): Promise<Board> {
    const result = await this.boardRepository.addRow(dto);
    return { id: result.identifiers[0].id, ...dto };
  }
  public async updateBoard(dto: Board): Promise<Board> {
    await this.boardRepository.updateRow(dto);
    return dto;
  }
  public deleteBoard(): string {
    return ;
  }
  public getBoardList(): string {
    return "getBoardList";
  }
  public getDetailBoard(): string {
    return "getDetailBoard";
  }
}
