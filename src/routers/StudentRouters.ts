import { Router } from "express";
import { randomBytes } from "crypto";
import { StudentController } from "../controllers/StudentController";
import { Student } from "../entity/Student";
const router = Router();
const _userController = new StudentController();

router.get("/", async (request, response, next) => {
  const result = await _userController.all();
  response.json(result);
});
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  const result = await _userController.one(id);
  response.json(result);
});
router.get("/new/:cpf", async (request, response, next) => {
  const { cpf } = request.params;
  const result = await _userController.searchCpf(cpf);
  if (result) {
    return response.json(result);
  } else {
    return response.status(401).end();
  }
});
router.post("/", async (request, response, next) => {
  const { name, email, password, cpf } = request.body;
  const student = new Student(name, email, password, cpf);
  const result = await _userController.save(student);
  response.json(result);
});
router.post("/login", async (request, response, next) => {
  const { email, password } = request.body;
  const result = await _userController.login({ email, password });
  if (result) {
    response.json({ ...result, token: randomBytes(10).toString("hex") });
  } else {
    response.status(401).end();
  }
});

export default router;
