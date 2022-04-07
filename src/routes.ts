import { Router } from "express";
import {
  validateShape,
  authenticateToken,
  verifyAdminValidation,
} from "./middlewares";
import {
  createUserController,
  getAllUsersController,
  loginUserController,
} from "./controllers";
import { userShape, loginShape } from "./shapes";

const route = Router();

route.post("/users", validateShape(userShape), createUserController);
route.post("/login", validateShape(loginShape), loginUserController);
route.get(
  "/users",
  authenticateToken,
  verifyAdminValidation,
  getAllUsersController
);

export default route;
