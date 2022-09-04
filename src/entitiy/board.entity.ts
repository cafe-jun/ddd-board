import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Board {
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
}
