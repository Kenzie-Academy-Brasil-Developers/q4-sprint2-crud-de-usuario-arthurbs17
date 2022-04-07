import { Request, Response } from "express";
import { User, UserRepository } from "../repositories";
import { StatusCodes } from "http-status-codes";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const user: User = req.user;
    const { uuid } = req.params;
    const data = req.validated;

    if (user.uuid !== uuid && !user.isAdm) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Missing authorization headers" });
    }

    await new UserRepository().updateUser(uuid, data);

    const attUser = await new UserRepository().findUserByUuid(uuid);

    delete attUser.password;

    return res.status(StatusCodes.OK).json(attUser);
  } catch (e) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Missing authorization headers" });
  }
};

export default updateUserController;
