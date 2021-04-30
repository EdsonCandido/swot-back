import { getRepository, getManager, Generated, ObjectID } from "typeorm";
import { Advisor } from "../entity/Advisor";
import { Student } from "../entity/Student";
import { Post } from "../entity/Post";
import { Teacher } from "../entity/Teacher";

export class AdvisorController {
  async index() {
    return await getManager().find(Advisor, {
      relations: ["StudentOwner", "PostOwner"],
    });
  }

  async show(id: string | number) {
    return await getManager().findOne(Advisor, id);
  }
  async updateState(id: string | number, state: string) {
    let result = await getManager().findOne(Advisor, id);
    return await getManager().update(Advisor, result.id, {
      status: state,
    });
  }
  async save(
    status: string,
    idTeacher: string | number,
    idStudent: string | number,
    idPost: string | number
  ) {
    let student = await getManager().findOne(Student, idStudent);
    let post = await getManager().findOne(Post, idPost);
    let teacher = await getManager().findOne(Teacher, idTeacher);
    let advisor = getManager().create(Advisor, {
      status: status,
      PostOwner: post,
      teacherOwner: teacher,
      StudentOwner: student,
    });
    return await getManager().save(advisor);
  }
}
