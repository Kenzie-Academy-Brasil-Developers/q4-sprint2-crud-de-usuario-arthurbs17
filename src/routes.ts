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
  getSpecificUserController,
  updateUserController,
  deleteUserController,
} from "./controllers";
import { userShape, loginShape, updateShape } from "./shapes";

const route = Router();

route.post("/users", validateShape(userShape), createUserController);
route.post("/login", validateShape(loginShape), loginUserController);
route.get(
  "/users",
  authenticateToken,
  verifyAdminValidation,
  getAllUsersController
);
route.get("/users/profile", authenticateToken, getSpecificUserController);
route.patch(
  "/users/:uuid",
  validateShape(updateShape),
  authenticateToken,
  updateUserController
);
route.delete("/users/:uuid", authenticateToken, deleteUserController);

export default route;
