import { IsNumberString } from "class-validator";

export interface IGetByIdParams {
  id: string;
  get ID(): number;
}

export class GetByIdParams implements IGetByIdParams {
  @IsNumberString()
  id: string;

  get ID(): number {
    return parseInt(this.id, 10);
  }
}
