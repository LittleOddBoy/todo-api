import { Router } from "express";
import { getTodos, createTodo, updateTodo } from "../controllers/todo.controller";
import { authorization } from "../middleware/auth.middleware";

const router = Router();

router.use(authorization);
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/", updateTodo);

export default router;
