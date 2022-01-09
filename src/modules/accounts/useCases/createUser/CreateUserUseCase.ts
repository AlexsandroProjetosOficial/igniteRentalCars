import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/user/ICreateUserDTO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";
import { hash } from "bcrypt";

class CreateUserUseCase {
	constructor(private usersRepository: IUsersRepositoryDTO) {}

	async execute({ name, email, password, driverLicence }: ICreateUserDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if(userAlreadyExists) {
			throw new AppError('User already exists.')
		}

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({ name, email, password: passwordHash, driverLicence });
	}
}

export { CreateUserUseCase };