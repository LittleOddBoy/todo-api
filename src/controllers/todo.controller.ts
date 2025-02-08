import { Request, Response } from "express";
import TodoModel from "../models/todo.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { title, completed } = req.body;
    const newTodo = new TodoModel({ title, completed, userId: req.id });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};
