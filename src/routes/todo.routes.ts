import { Router } from "express";
import { getTodos, createTodo } from "../controllers/todo.controller";

const router = Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);

export default router;

