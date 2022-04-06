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
  updateUser: (user: UserInterface) => Promise<UserInterface>;
  deleteUser: (uuid: string) => void;
}

export { UserInterface, UserRepo };
