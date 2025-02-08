import mongoose from "mongoose";
// import UsersModel from "../models/user.model";

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Types.ObjectId, ref: "Users" },
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
