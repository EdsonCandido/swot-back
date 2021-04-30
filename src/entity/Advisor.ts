import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

@Entity()
export class Advisor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  status: string;

  @OneToOne(() => Teacher, { cascade: true, eager: true })
  @JoinColumn()
  teacherOwner: Teacher;

  @OneToOne(() => Student, { cascade: true, eager: true })
  @JoinColumn()
  StudentOwner: Student;

  @OneToOne(() => Post, { cascade: true, eager: true })
  @JoinColumn()
  PostOwner: Post;
}
