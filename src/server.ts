import "reflect-metadata";
import "./ioc/loader";
import express from "express";
import { Container } from "inversify";
import { InversifyExpressServer, TYPE } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import { buildProviderModule } from "inversify-binding-decorators";
// import { bindings } from "./config/inversify.config";
// import { bindings } from "./config/inversify.config";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { bindings } from "./config/inversify.config";
// export class Server {
//   private app: express.Application;
//   private PORT: number = Number(process.env.PORT) || 3000;
//   private server: InversifyExpressServer;
//   private container: Container;

//   constructor() {
//     this.container = new Container();
//     // inversify-binding-decorators  이용하여 buildProvideModule로 loc Container 관리
//     // this.container.bind<BoardService>(TYPES.BoardService).to(BoardService);
//     // this.container.loadAsync(buildProviderModule());
//     this.server = new InversifyExpressServer(this.container);
//     this.server.setConfig((app) => {
//       app.use(bodyParser.urlencoded({ extended: true }));
//       app.use(bodyParser.json());
//       // node 기본적인 보안 -> helmet 추가
//       app.use(helmet());
//     });
//     this.server.setErrorConfig((app) => {
//       app.use((err, req, res, next) => {
//         console.error(err.stack);
//         res.status(500).send("Something broke!");
//       });
//     });
//     this.app = this.server.build();
//     this.app.listen(this.PORT, () => {
//       console.log("listening on port " + this.PORT);
//     });
//   }

//   public static bootstrap(): Server {
//     return new Server();
//   }
// }
// Server.bootstrap();

(async () => {
  dotenv.config();
  const port = 3000;
  const container = new Container();
  await container.loadAsync(bindings);
  const server = new InversifyExpressServer(container);
  server.setConfig((app) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // node 기본적인 보안 -> helmet 추가
    app.use(helmet());
  });
  const bootstrap = server.build();

  bootstrap.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });
})();
