import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { IBoard } from "./interface";

@Entity()
export class Board implements IBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: "200" })
  title: string;

  @Column("varchar", { name: "description", nullable: true, length: "5000" })
  description: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn({ select: false })
  deleteTime: Date;

  //   @OneToOne(() => Photo)
  //   @JoinColumn()
  //   photo: Photo;

  static toEntity(title: string, description: string): Board {
    const board = new Board();
    board.title = title;
    board.description = description;
    return board;
  }
}
