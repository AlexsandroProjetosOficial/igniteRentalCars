import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "@errors/AppError";
import { IAuthenticateUserDTO } from "@modules/accounts/dtos/authenticate/IAuthenticateUserDTO";
import { IAuthenticateUserResponseDTO } from "@modules/accounts/dtos/authenticate/IAuthenticateUserResponseTDO";
import { IUsersRepositoryDTO } from "@modules/accounts/dtos/user/IUsersRepositoryDTO";

class AuthenticateUserUseCase {
	constructor(private usersRepository: IUsersRepositoryDTO) {}

	async execute({ email, password }: IAuthenticateUserDTO): Promise<IAuthenticateUserResponseDTO> {
		const user = await this.usersRepository.findByEmail(email);

		if(!user) {
			throw new AppError('Email or Password incorrect.')
		}

		const passwordMatch = await compare(password, user.password);

		if(!passwordMatch) {
			throw new AppError('Email or Password incorrect.')
		}

		const token = sign(
			{},
			'fd1fb79c-6c82-424a-ae73-a758f181dc74',
			{
				subject: user.id,
				expiresIn: '1d'
			}
		);

		const dataReturn: IAuthenticateUserResponseDTO = {
			token,
			user: {
				name: user.name,
				email: user.email
			},
		};

		return dataReturn;
	}
};

export { AuthenticateUserUseCase };