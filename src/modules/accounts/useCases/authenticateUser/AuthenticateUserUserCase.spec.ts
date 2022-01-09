import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/user/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepossitoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
	beforeEach(() => {
		usersRepositoryInMemory = new UsersRepositoryInMemory();
		authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
		createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
	});

	it('Should be able to authenticated an user', async () => {
		const user: ICreateUserDTO = {
			driverLicence: '000123',
			email: 'user@test.com',
			password: '1234',
			name: 'User Test'
		};

		await createUserUseCase.execute(user);

		const result = await authenticateUserUseCase.execute({
			email: user.email,
			password: user.password
		});

		expect(result).toHaveProperty('token');
	});

	it('Should be able to authenticate an nonexistent user', () => {
		expect(async () => {
			await authenticateUserUseCase.execute({
				email: 'false@email.com',
				password: '1234'
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('Should not be able to authenticate with incorrect password', () => {
		expect(async () => {
			const user: ICreateUserDTO = {
				driverLicence: '000123',
				email: 'user@test.com',
				password: '1234',
				name: 'User Test Error'
			};
	
			await createUserUseCase.execute(user);
	
			await authenticateUserUseCase.execute({
				email: user.email,
				password: 'incorrectPassword'
			});
		}).rejects.toBeInstanceOf(AppError);
	});
});