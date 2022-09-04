import "reflect-metadata";
import "mocha";
import { expect } from "chai";
import { BoardService } from "../../model/board/board.service";

describe("BoardService", () => {
  it("should give new Board `", () => {
    let service = new BoardService();

    expect(service.addBoard()).to.equal("addBoard");
  });
  it("should give update Board `", () => {
    let service = new BoardService();

    expect(service.updateBoard()).to.equal("updateBoard");
  });
  it("should give delete Board `", () => {
    let service = new BoardService();

    expect(service.deleteBoard()).to.equal("deleteBoard");
  });
  it("should give list Board `", () => {
    let service = new BoardService();

    expect(service.getBoardList()).to.equal("getBoardList");
  });
  it("should give detail Board `", () => {
    let service = new BoardService();

    expect(service.getDetailBoard()).to.equal("getDetailBoard");
  });
});
