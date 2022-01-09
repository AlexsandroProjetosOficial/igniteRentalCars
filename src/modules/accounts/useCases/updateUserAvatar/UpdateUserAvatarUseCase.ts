import { AppError } from "@errors/AppError";
import { IUpdateUserAvatarDTO } from "@modules/accounts/dtos/user/IUpdateUserAvatarDTO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";
import { file } from '@utils/file';

class UpdateUserAvatarUseCase {
	constructor (private usersRepository: IUsersRepositoryDTO) {}

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