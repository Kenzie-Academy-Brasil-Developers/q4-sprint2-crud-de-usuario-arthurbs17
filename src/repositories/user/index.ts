import { Repository, getRepository } from "typeorm";
import { UserInterface, UserRepo } from "./interface";
import { User } from "../../entities/User";

class UserRepository implements UserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  }

  createUser = async (user: UserInterface) => await this.ormRepo.save(user);

  getAllUsers = async () => await this.ormRepo.find();

  updateUser = async (user: UserInterface) => await this.ormRepo.save(user);

  deleteUser = async (uuid: string) => await this.ormRepo.delete(uuid);
}

export { UserRepository, User };
