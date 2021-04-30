import { Router } from "express";
import { randomBytes } from "crypto";
import { CoordinatorController } from "../controllers/CoordinatorController";
const router = Router();
const _userController = new CoordinatorController();

router.get("/", async (request, response, next) => {
  const result = await _userController.all();
  response.json(result);
});
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  const result = await _userController.one(id);
  response.json(result);
});
router.post("/", async (request, response, next) => {
  const { name, email, password } = request.body;
  const result = await _userController.save({ name, email, password });
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
