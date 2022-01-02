import { ICreateUserDTO } from "./ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "./IUpdateUserAvatarDTO";
import { IUserDTO } from "./IUserDTO";

interface IUsersRepositoryDTO {
	create({ name, password, email, driverLicence }: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<IUserDTO>;
	findById(user_id: string): Promise<IUserDTO>;
	update({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void>;
}

export { IUsersRepositoryDTO };