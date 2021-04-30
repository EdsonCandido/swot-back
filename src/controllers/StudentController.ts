import { getManager, getRepository } from "typeorm";
import { Student } from "../entity/Student";

export class StudentController {
  async all() {
    return await getManager().find(Student);
  }

  async one(id: string | number) {
    return await getManager().findOne(Student, id);
  }
  async searchCpf(cpf: string) {
    return await getManager().findOne(Student, {
      where: { cpf: cpf.toString() },
    });
  }
  async login(student: { email: string; password: string }) {
    return await getManager().findOne(Student, {
      where: { email: student.email, password: student.password },
    });
  }

  async save(student: Student) {
    return await getManager().save(student);
  }

  async remove(id: string | number) {
    let student = await getManager().findOne(Student, id);
    await getManager().remove(student);
  }
}
