import { query } from "express";

export class TransActionRepository {
  async giveGoldPlayer(giver, givener) {
    try {
      await this._query("UPDATE players SET gold = gold - 1000 WHERE id = 1");
      await this._query("UPDATE players SET gold = gold + 1000 WHERE id = 2");
    } catch (error) {
      console.error(error.stack);
    }
  }
  private _query(query: string) {
    return "";
  }
}
