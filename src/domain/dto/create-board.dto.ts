import { ICreateBoardDto } from "./../board/interface";
import { IsNotEmpty, IsString } from "class-validator";
import { Board } from "../board/board";

export class CreateBoardDto implements ICreateBoardDto {
  @IsString({ always: true })
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  toEntity(): Board {
    return Board.toEntity(this.title, this.description);
  }
}
