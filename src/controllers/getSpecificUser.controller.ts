import { Request, Response } from "express";
import { User } from "../repositories";
import { StatusCodes } from "http-status-codes";

const getSpecificUserController = (req: Request, res: Response) => {
  try {
    const user: User = req.user;

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Missing authorization headers" });
    }

    delete user.password;

    return res.status(StatusCodes.OK).json(user);
  } catch (e) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Missing authorization headers" });
  }
};

export default getSpecificUserController;
