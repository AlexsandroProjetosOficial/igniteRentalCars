import { UsersRepository } from "../../repositories/user/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserControler = new CreateUserController(createUserUseCase);

export { createUserControler };