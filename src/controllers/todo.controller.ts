import { Request, Response } from "express";
import TodoModel from "../models/todo.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const createTodo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { title, completed } = req.body;
    const newTodo = new TodoModel({ title, completed, userId: req.id });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

export const updateTodo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { _id, title, completed } = req.body;
    const updated = await TodoModel.findOneAndUpdate(
      { _id },
      { title, completed }
    );

    if (!updated) {
      res.status(404).json({ message: "This is not the correct id!" });
    }

    res.status(200).json({ message: "It's all done" });
  } catch {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

export const removeTodos = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { _id } = req.body;
    const removeTodo = await TodoModel.findByIdAndDelete({ _id });
    if (!removeTodo)
      res.status(404).send({ massage: "This is not the correct id!" });
    res.status(200).send({ massage: "Delete to do successfully" });
  } catch (error) {
    res.status(400).send({
      massage:
        "Error in deleting todo; make sure send correct Id or something like that",
    });
  }
};
