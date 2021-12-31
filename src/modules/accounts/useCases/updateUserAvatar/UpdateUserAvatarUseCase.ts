import { AppError } from "../../../../errors/AppError";
import { IUpdateUserAvatarDTO } from "../../dtos/IUpdateUserAvatarDTO";
import { IUsersRepository } from "../../repositories/user/IUsersRepository";

class UpdateUserAvatarUseCase {
	constructor (private usersRepository: IUsersRepository) {}

	async execute({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void> {
		const user = await this.usersRepository.findById(user_id);

		if(!user) {
			throw new AppError("User doesen't exists.");
		}

		await this.usersRepository.update({ user_id, avatar_file });
	}
};

export { UpdateUserAvatarUseCase };