import { Repository, getRepository, UpdateResult } from "typeorm";
import { UserInterface, UserRepo } from "./interface";
import { User } from "../../entities/User";

class UserRepository implements UserRepo {
  private ormRepo: Repository<User>;

  constructor() {
    this.ormRepo = getRepository(User);
  }

  createUser = async (user: UserInterface) => await this.ormRepo.save(user);

  getAllUsers = async () => await this.ormRepo.find();

  updateUser = async (uuid: string, user: UserInterface) =>
    await this.ormRepo.update(uuid, user);

  deleteUser = async (uuid: string) => await this.ormRepo.delete(uuid);

  findUserByEmail = async (email: string) =>
    await this.ormRepo.findOne({ where: { email } });

  findUserByUuid = async (uuid: string) =>
    await this.ormRepo.findOne({ where: { uuid } });
}

export { UserRepository, User };
