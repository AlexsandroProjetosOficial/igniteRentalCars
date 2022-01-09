import { ICreateUserDTO } from "@modules/accounts/dtos/user/ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "@modules/accounts/dtos/user/IUpdateUserAvatarDTO";
import { IUserDTO } from "@modules/accounts/dtos/user/IUserDTO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";
import { User } from "./models/User";

class UsersRepositoryInMemory implements IUsersRepositoryDTO {
	users: User[] = [];

	async create({ name, password, email, driverLicence }: ICreateUserDTO): Promise<void> {
		const user = new User();

		Object.assign(user, {
			name, 
			password, 
			email, 
			driverLicence
		});

		this.users.push(user);
	};

	async findByEmail(email: string): Promise<IUserDTO> {
		return this.users.find(user => user.email === email);
	};

	async findById(user_id: string): Promise<IUserDTO> {
		return this.users.find(user => user.id === user_id);
	};

	async update({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void> {
		const user = this.users.find(user => user.id === user_id);

		user.avatar = avatar_file;
	}

}

export { UsersRepositoryInMemory };