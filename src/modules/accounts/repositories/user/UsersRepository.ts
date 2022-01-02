import { prismaClient } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "../../dtos/IUpdateUserAvatarDTO";
import { IUserDTO } from "../../dtos/IUserDTO";
import { IUsersRepositoryDTO } from "../../dtos/IUsersRepositoryDTO";

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