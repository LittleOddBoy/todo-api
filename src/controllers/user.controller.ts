import type { Request, Response } from "express";
import UserModel from "../models/user.model";
import * as jwt from "jsonwebtoken";
import * as argon2 from "argon2";

const SECRET_CODE = "abcd";

export const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    const payload = { username };
    const token = jwt.sign(payload, SECRET_CODE);

    res.status(200).json({ token });
  } catch {
    res.status(400).json({ message: "Bad request" });
  }
};

export const login = (req: Request, res: Response) => {};
