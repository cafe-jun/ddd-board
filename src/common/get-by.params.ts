import { IsNumberString } from "class-validator";
import { IGetByIdParams } from "./interface";

export class GetByIdParams implements IGetByIdParams {
  @IsNumberString()
  id: string;

  get ID(): number {
    return parseInt(this.id, 10);
  }
}
