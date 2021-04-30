import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EncryptionTransformer } from "typeorm-encrypted";

@Entity()
export class Student {
  constructor(name: string, email: string, password: string, cpf: string) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.cpf = cpf;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column({
    transformer: new EncryptionTransformer({
      key: "e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61",
      algorithm: "aes-256-cbc",
      ivLength: 16,
      iv: "ff5ac19190424b1d88f9419ef949ae56",
    }),
  })
  password: string;
}
