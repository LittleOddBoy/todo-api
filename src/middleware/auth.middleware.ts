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
    res.send("خاک به سرت کنن");
    return;
  }

  jwt.verify(authHeader as string, SECRET_CODE, (err, id) => {
    if (err) res.send("ای دروغگو!");
    req.id = id;
    next();
  });
};
