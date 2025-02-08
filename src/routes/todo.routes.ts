import { Router } from "express";
import { getTodos, createTodo } from "../controllers/todo.controller";
import { authorization } from "../middleware/auth.middleware";

const router = Router();

router.use(authorization)
router.get("/", getTodos);
router.post("/", createTodo);

export default router;
