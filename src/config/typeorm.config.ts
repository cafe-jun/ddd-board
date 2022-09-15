import { Connection, createConnection } from "typeorm";
import { Board } from "../domain/board/board";

export const SalinEntity = [Board];

export async function getDbConnection() {
  const DATABASE_HOST: string = process.env.DATABASE_HOST || "localhost";
  const DATABASE_USER: string = process.env.DATABASE_USER || "";
  const DATABASE_PORT: number = Number(process.env.DATABASE_PORT) || 3306;
  const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD || "";
  const DATABASE_DB: string = process.env.DATABASE_DB || "salin_board";
  /**
   *  The database connection dataSource Type not supported
   *
   */

  return await createConnection({
    type: "mysql",
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_DB,
    entities: [Board],
    synchronize: true,
    logging: true,
  });
}
