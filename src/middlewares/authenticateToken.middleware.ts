import { Request, Response, NextFunction } from "express";
import JWT from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { config } from "../configs";
import { UserRepository, User } from "../repositories";

const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Missing authorization headers" });
  }

  const token = authorizationHeader.split(" ")[1];

  await JWT.verify(token, config.secretKey, async (err, decode: any) => {
    if (err) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Missing authorization headers" });
    }

    req.user = await new UserRepository().findUserByEmail(decode.email);
    return next();
  });
};

export default authenticateToken;
