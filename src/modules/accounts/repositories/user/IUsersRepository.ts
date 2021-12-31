import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "../../dtos/IUpdateUserAvatarDTO";
import { User } from "../../models/User";

interface IUsersRepository {
	create({ name, password, email, driverLicence }: ICreateUserDTO): Promise<void>;
	findByEmail(email: string): Promise<User>;
	findById(user_id: string): Promise<User>;
	update({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void>;
}

export { IUsersRepository };