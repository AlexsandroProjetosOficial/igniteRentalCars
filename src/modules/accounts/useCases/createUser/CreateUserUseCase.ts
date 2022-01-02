import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepositoryDTO } from "../../dtos/IUsersRepositoryDTO";

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