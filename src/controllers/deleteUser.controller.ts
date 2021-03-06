import { Request, Response } from "express";
import { UserRepository, User } from "../repositories";
import { StatusCodes } from "http-status-codes";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const user: User = req.user;
    const { uuid } = req.params;

    if (user.uuid !== uuid && !user.isAdm) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Missing authorization headers" });
    }

    await new UserRepository().deleteUser(uuid);

    return res
      .status(StatusCodes.OK)
      .json({ message: "User deleted with success" });
  } catch (e) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Missing authorization headers" });
  }
};

export default deleteUserController;
