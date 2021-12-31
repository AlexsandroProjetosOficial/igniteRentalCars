import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
	constructor(private authenticateUseCase: AuthenticateUserUseCase) {}

	async handle(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;

		const authenticateUserToken = await this.authenticateUseCase.execute({ email, password });

		return res.status(200).json({
			authenticateUserToken
		});
	}
};

export { AuthenticateUserController };