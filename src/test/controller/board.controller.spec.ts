import "reflect-metadata";
import "mocha";
import { expect } from "chai";
import { BoardController } from "../../infrastructure/controllers/board.controller";
import { BoardService } from "../../domain/board/board.service";

describe("BoardController", () => {
  it("should give new Board `", () => {
    let controller = new BoardController(new BoardService());

    expect(controller.add()).to.equal("addBoard");
  });
  it("should give update Board `", () => {
    let controller = new BoardController(new BoardService());

    expect(controller.update()).to.equal("updateBoard");
  });
  it("should give delete Board `", () => {
    let controller = new BoardController(new BoardService());

    expect(controller.delete()).to.equal("deleteBoard");
  });
  it("should give list Board `", () => {
    let controller = new BoardController(new BoardService());

    expect(controller.pagin()).to.equal("getBoardList");
  });
  it("should give detail Board `", () => {
    let controller = new BoardController(new BoardService());

    expect(controller.detail()).to.equal("getDetailBoard");
  });
});
