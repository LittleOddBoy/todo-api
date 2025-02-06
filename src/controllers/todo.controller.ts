import type { Response, Request} from "express";

export const getTodos = (req: Request, res: Response) => {
  res.json({ message: "Fetching all todos" });
};
