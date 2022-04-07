import { Request, Response } from "express";
import { UserRepository, User } from "../repositories";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../configs";
import { StatusCodes } from "http-status-codes";

const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.validated;

    const user: User = await new UserRepository().findUserByEmail(email);

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Wrong email/password" });
    }

    const token = JWT.sign({ ...user }, config.secretKey, {
      expiresIn: config.expiresIn,
    });

    return res.status(StatusCodes.OK).json({ token: token });
  } catch (e) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Wrong email/password" });
  }
};

export default loginUserController;
