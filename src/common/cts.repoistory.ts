import { EntityTarget } from "typeorm";
import { getDataSource } from "../config/typeorm.config";
import { SalinEntity } from "../config/typeorm.config";

export function getRepository(entity: EntityTarget<any>) {
  const conn = getDataSource();
  const customRepository = conn.getRepository(entity);
  return customRepository;
}
