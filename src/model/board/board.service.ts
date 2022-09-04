import { injectable } from "inversify";

@injectable()
export class BoardService {
  constructor() {}

  public getBoard(): string {
    return "fooService ";
  }
}
