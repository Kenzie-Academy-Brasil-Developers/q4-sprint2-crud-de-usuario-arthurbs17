import { Request, Response } from "express";
import { UserRepository, User } from "../repositories";
import { StatusCodes } from "http-status-codes";

const createUserController = async (req: Request, res: Response) => {
  try {
    const data = req.validated;
    const newUser: User = await new UserRepository().createUser(data);

    delete newUser.password;

    return res.status(StatusCodes.CREATED).json(newUser);
  } catch (e) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "E-mail already registered" });
  }
};

export default createUserController;
