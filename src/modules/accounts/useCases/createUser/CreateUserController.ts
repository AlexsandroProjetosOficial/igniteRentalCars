import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { name, email, password, driverLicence } = req.body;

		await this.createUserUseCase.execute({ name, email, password, driverLicence });

		return res.status(201).send();
	}
};

export { CreateUserController };