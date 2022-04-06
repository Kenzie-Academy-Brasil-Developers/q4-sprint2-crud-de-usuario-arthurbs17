import { Router } from "express";
import { validateShape } from "./middlewares";
import { createUserController, getAllUsersController } from "./controllers";
import { userShape } from "./shapes";

const route = Router();

route.post("/users", validateShape(userShape), createUserController);
route.get("/users", getAllUsersController);

export default route;
