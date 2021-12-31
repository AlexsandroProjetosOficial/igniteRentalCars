import { UsersRepository } from "../../repositories/user/UsersRepository";
import { UpdateUserAvatarController } from "./UpdateUserAvatarController";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

const usersRepository = new UsersRepository();

const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);

const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);

export { updateUserAvatarController };