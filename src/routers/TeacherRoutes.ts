import { Router } from "express";
import { TeacherController } from "../controllers/TeacherControllers";

const router = Router();
const _teacherController = new TeacherController();

interface ITeacher {
  id?: number;
  name: string;
  email: string;
  password: string;
}

router.get("/", async (request, response, next) => {
  const result = await _teacherController.all();
  response.json(result);
});
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  const result = await _teacherController.one(id);
  response.json(result);
});
router.post("/", async (request, response, next) => {
  const { name, email, password } = request.body;
  const result = await _teacherController.save({ email, name, password });
  response.json(result);
});
router.post("/login", async (request, response, next) => {
  const { email, password } = request.body;
  const result = await _teacherController.login({ email, password });
  response.json(result);
});
router.put("/:id", async (request, response, next) => {
  response.status(501).json({
    message: "Router not implement",
    body: {},
  });
});
router.delete("/:id", async (request, response, next) => {
  const { id } = request.params;
  const result = await _teacherController.destroy(id);
  response.json(result);
});

export default router;
