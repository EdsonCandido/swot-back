import { getManager } from "typeorm";
import { Coordinator } from "../entity/Coordinator";

export class CoordinatorController {
  async all() {
    return await getManager().find(Coordinator);
  }

  async one(id: string | number) {
    return await getManager().findOne(Coordinator, id);
  }
  async login(coordinator: { email: string; password: string }) {
    return await getManager().findOne(Coordinator, {
      where: { email: coordinator.email, password: coordinator.password },
    });
  }

  async save(coordinator) {
    const result = getManager().create(Coordinator, coordinator);
    return await getManager().save(result);
  }

  async remove(id: string | number) {
    let coordinator = await getManager().findOne(Coordinator, id);
    await getManager().remove(coordinator);
  }
}
