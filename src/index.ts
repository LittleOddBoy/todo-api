import * as express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import todoRoute from "./routes/todo.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todo";

app.use(express.json());
app.use("/todos", todoRoute);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Welcome to the To-Do List API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
