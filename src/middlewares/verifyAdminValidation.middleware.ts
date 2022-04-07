import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const verifyAdminValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  if (!user.isAdm) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Unauthorized" });
  }

  return next();
};

export default verifyAdminValidation;
