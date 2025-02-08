import type { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const SECRET_CODE = "abcd";

export interface AuthorizationRequest extends Request {
  id?: jwt.JwtPayload | string | number;
}

export const authorization = async (
  req: AuthorizationRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(".")[1];

  if (!token) {
    res
      .status(400)
      .json({ message: "There is no authorization token provided" });
    return;
  }

  jwt.verify(authHeader as string, SECRET_CODE, (err, id) => {
    if (err) res.status(400).json({ message: "You are a lier!" });
    req.id = id;
    next();
  });
};
