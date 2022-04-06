import { Request, Response } from "express";
import { UserRepository } from "../repositories";
import { StatusCodes } from "http-status-codes";

const getAllUsersController = async (req: Request, res: Response) => {
  const users = await new UserRepository().getAllUsers();

  return res.status(StatusCodes.OK).json(users);
};

export default getAllUsersController;
