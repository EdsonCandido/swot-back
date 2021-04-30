import { Router } from "express";
import { PostController } from "../controllers/PostControllers";
const router = Router();
const _postController = new PostController();

router.get("/", async (request, response, next) => {
  const posts = await _postController.all();
  response.json(posts);
});
router.get("/:id", async (request, response, next) => {
  const { id } = request.params;
  console.log(id);
  const post = await _postController.one(parseInt(id));
  response.json(post);
});
router.post("/", async (request, response, next) => {
  const { theme, area, description, owner, period } = request.body;
  const post = { theme, area, description, period };
  const result = await _postController.save(owner.id, post);
  response.json(result);
});
router.put("/:id", async (request, response, next) => {
  const { id, theme, description, area, period } = request.body;
  const post = {
    id: parseInt(id),
    theme,
    description,
    area,
    period,
  };
  const result = await _postController.update(post, id);
  response.json(result);
});
router.delete("/:id", async (request, response, next) => {
  const { id } = request.params;
  const result = await _postController.destroy(id);
  response.json(result);
});

export default router;
