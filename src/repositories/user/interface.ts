import { UpdateResult, DeleteResult } from "typeorm";

interface UserInterface {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

interface UserRepo {
  createUser: (user: UserInterface) => Promise<UserInterface>;
  getAllUsers: () => Promise<UserInterface[]>;
  updateUser: (uuid: string, user: UserInterface) => Promise<UpdateResult>;
  deleteUser: (uuid: string) => Promise<DeleteResult>;
  findUserByEmail: (email: string) => Promise<UserInterface>;
  findUserByUuid: (uuid: string) => Promise<UserInterface>;
}

export { UserInterface, UserRepo };
