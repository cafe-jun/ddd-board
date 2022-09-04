import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { Container } from "inversify";
import { InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import { BoardService } from "./model/board/board.service";
import "./model/board/board.controller";
import TYPES from "./constrant/types";

export class Server {
  private app: express.Application;
  private PORT: number = Number(process.env.PORT) || 3000;
  private server: InversifyExpressServer;
  private container: Container;

  constructor() {
    this.container = new Container();
    this.container.bind<BoardService>(TYPES.BoardService).to(BoardService);

    this.server = new InversifyExpressServer(this.container);
    this.server.setConfig((app) => {
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
    });
    this.server.setErrorConfig((app) => {
      app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send("Something broke!");
      });
    });
    this.app = this.server.build();
    this.app.listen(this.PORT, () => {
      console.log("listening on port " + this.PORT);
    });
  }
  public static bootstrap(): Server {
    return new Server();
  }
}

Server.bootstrap();
