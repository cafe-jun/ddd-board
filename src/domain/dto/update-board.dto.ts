import { IUpdateBoardDto } from "./../board/interface";
import { ICreateBoardDto } from "../board/interface";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Board } from "../../entitiy/board.entity";

export class UpdateBoardDto implements IUpdateBoardDto {
  id: number;
  @IsString({ always: true })
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  toEntity(): Board {
    return Board.toEntity(this.title, this.description);
  }
  setBoardId(id: number): void {
    this.id = id;
  }
}
