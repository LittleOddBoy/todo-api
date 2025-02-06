import { Request, Response } from "express";
import TodoModel from "../models/todo.model";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;
    const newTodo = new TodoModel({ title, completed });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};


