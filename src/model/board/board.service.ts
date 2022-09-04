import { injectable } from "inversify";

@injectable()
export class BoardService {
  constructor() {}

  public getBoard(): string {
    return "getBoard";
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
