import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Teacher } from "./Teacher";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  theme: string;
  @Column()
  area: string;
  @Column()
  description: string;
  @Column()
  period: string;
  @ManyToOne(() => Teacher, (teacher) => teacher.posts, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  owner: Teacher;
}
