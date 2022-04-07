import { User } from "../repositories";

declare global {
  namespace Express {
    interface Request {
      validated: any;
      user: User;
    }
  }
}
