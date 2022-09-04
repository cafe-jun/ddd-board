// import { getDataSource } from "../config/typeorm.config";

// export class MySqlConnection {
//   private static isConnected: boolean = false;

//   public static getConnection(result: (connection) => void) {
//     if (this.isConnected) {
//       //   return result(this.db);
//     } else {
//       this.connect((error, db: Db) => {
//         // return result(this.db);
//       });
//     }
//   }

//   private static connect(result: (error, db: Db) => void) {
//     getDataSource()
//       .initialize()
//       .then(() => {
//         // console.log("database connection"); a
//         this.isConnected = true;
//       })
//       .catch((error) => console.error(error));
//     // MongoClient.connect(connStr, (err, client) => {
//     //   this.db = client.db(dbName);
//     //   this.isConnected = true;
//     //   return result(err, this.db);
//     // });
//   }
// }
