import * as express from "express";
import * as dotenv from "dotenv";
import todoRoute from "./routes/todo.routes";
import userRoute from "./routes/user.routes";
import * as mongoose from "./config/db";
import { authorization } from "./middleware/auth.middleware";

dotenv.config();
mongoose;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/todos", todoRoute);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the To-Do List API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
