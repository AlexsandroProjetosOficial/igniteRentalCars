import { ICreateUserDTO } from "@modules/accounts/dtos/user/ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "@modules/accounts/dtos/user/IUpdateUserAvatarDTO";
import { IUserDTO } from "@modules/accounts/dtos/user/IUserDTO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";
import { prismaClient } from "@prisma/index";

class UsersRepository implements IUsersRepositoryDTO {
	async update({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void> {
		await prismaClient.user.update({
			where: {
				id: user_id
			},
			data: {
				avatar: avatar_file
			}
		})
	};

	async findById(user_id: string): Promise<IUserDTO> {
		const user = await prismaClient.user.findFirst({
			where: {
				id: user_id
			}
		});

		return user;
	};

	async findByEmail(email: string): Promise<IUserDTO> {
		const user = await prismaClient.user.findFirst({
			where: {
				email: email
			}
		});

		return user;
	};

	async create({ name, password, email, driverLicence }: ICreateUserDTO): Promise<void> {
		await prismaClient.user.create({
			data: {
				name,
				password,
				email,
				driverLicence
			}
		});
	};
};

export { UsersRepository };