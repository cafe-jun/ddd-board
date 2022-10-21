import { inject, injectable } from "inversify";
import { provide } from "inversify-binding-decorators";
import { NotFoundResult } from "inversify-express-utils/lib/results";
import { EntityNotFoundError, Repository } from "typeorm";
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
  public async deleteBoard(id: number): Promise<string> {
    await this.boardRepository.deleteRow(id);
    return "success";
  }
  // public async getBoardList(): Promise<Board[]> {
  //   const boards = await this.boardRepository.find();
  //   return boards;
  // }
  public async getDetailBoard(id: number): Promise<Partial<Board>> {
    try {
      const board = await this.boardRepository.getById(id);
      if (!board) {
        throw new NotFoundResult();
      }
      return board;
    } catch (error) {
      console.error(error);
    }
  }
}
