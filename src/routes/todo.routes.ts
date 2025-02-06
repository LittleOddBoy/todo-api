import { Router } from "express";

const router = Router();

router.get("/todos", (req, res) => {
  res.json({ message: "Get all todos" });
});

export default router;
