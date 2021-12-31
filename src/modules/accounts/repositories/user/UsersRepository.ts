import { prismaClient } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUpdateUserAvatarDTO } from "../../dtos/IUpdateUserAvatarDTO";
import { User } from "../../models/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
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

	async findById(user_id: string): Promise<User> {
		const user = await prismaClient.user.findFirst({
			where: {
				id: user_id
			}
		});

		return user;
	};

	async findByEmail(email: string): Promise<User> {
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