import { AppError } from "../../../../errors/AppError";
import { file } from "../../../../utils/file";
import { IUpdateUserAvatarDTO } from "../../dtos/IUpdateUserAvatarDTO";
import { IUsersRepository } from "../../repositories/user/IUsersRepository";

class UpdateUserAvatarUseCase {
	constructor (private usersRepository: IUsersRepository) {}

	async execute({ user_id, avatar_file }: IUpdateUserAvatarDTO): Promise<void> {
		const user = await this.usersRepository.findById(user_id);

		if(!user) {
			throw new AppError("User doesen't exists.");
		}

		if(user.avatar) {
			await file(`./tmp/avatar/${user.avatar}`);
		}

		await this.usersRepository.update({ user_id, avatar_file });

	}
};

export { UpdateUserAvatarUseCase };