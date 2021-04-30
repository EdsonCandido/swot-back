import { getManager } from "typeorm";
import { Teacher } from "../entity/Teacher";

interface ITeacher {
  id?: number;
  name: string;
  email: string;
  password: string;
}
export class TeacherController {
  async all(): Promise<Teacher[]> {
    return await getManager().find(Teacher);
  }
  async one(id: number | string): Promise<Teacher> {
    return await getManager().findOne(Teacher, id);
  }
  async save(teacher: ITeacher): Promise<Teacher> {
    const result = getManager().create(Teacher, teacher);
    return await getManager().save(result);
  }
  async login(teacher: { email: string; password: string }): Promise<Teacher> {
    return await getManager().findOne(Teacher, {
      where: { email: teacher.email, password: teacher.password },
    });
  }

  async destroy(id: string | number) {
    let result = await getManager().findOne(Teacher, id);
    if (result) {
      return await getManager().delete(Teacher, id);
    } else {
      return {
        menssage: "Teacher not Found",
        error: "Teacher not exist",
        body: {},
      };
    }
  }
}
