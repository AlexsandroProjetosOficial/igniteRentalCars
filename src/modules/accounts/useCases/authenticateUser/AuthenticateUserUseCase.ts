import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { IAuthenticateUserResponseDTO } from "../../dtos/IAuthenticateUserResponseTDO";
import { IUsersRepositoryDTO } from "../../dtos/IUsersRepositoryDTO";

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
			process.env.JWT_SECRET,
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