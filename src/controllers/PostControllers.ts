import { getManager } from "typeorm";
import { Post } from "../entity/Post";
import { Teacher } from "../entity/Teacher";

interface IPost {
  id?: number;
  theme: string;
  area: string;
  period: string;
  description: string;
}

export class PostController {
  async all(): Promise<Post[]> {
    return await getManager().find(Post, {
      relations: ["owner"],
    });
  }
  async one(id: string | number): Promise<Post> {
    return await getManager().findOne(Post, id);
  }
  async save(idOwner: string | number, post: IPost): Promise<Post> {
    console.log(idOwner);
    const teacher = await getManager().findOne(Teacher, idOwner);
    console.log(teacher);
    const result = getManager().create(Post, {
      theme: post.theme,
      area: post.area,
      description: post.description,
      period: post.period,
      owner: teacher,
    });
    return await getManager().save(result);
  }
  async update(post: IPost, id: string | number): Promise<any> {
    let result = await getManager().findOne(Post, id);
    return await getManager().update(Post, result.id, {
      area: post.area,
      description: post.description,
      theme: post.theme,
      period: post.period,
    });
  }
  async destroy(id: string | number): Promise<any> {
    return await getManager().delete(Post, id);
  }
}
