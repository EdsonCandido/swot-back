import { Router } from "express";
import { AdvisorController } from "../controllers/AdvisorController";
const router = Router();
const _controller = new AdvisorController();

router.get("/", async (request, response, next) => {
  const result = await _controller.index();
  response.json(result);
});
router.get("/:id", async (request, response, next) => {
  let { id } = request.params;
  let result = await _controller.show(id);
  response.json(result);
});
router.post("/", async (request, response, next) => {
  let { teacher, student, post, status } = request.body;
  let result = await _controller.save(status, teacher, student, post);
  response.json(result);
});
router.put("/:id", async (request, response, next) => {
  let { id } = request.params;
  let { status } = request.body;
  let result = await _controller.updateState(id, status);
  response.json(result);
});

export default router;
