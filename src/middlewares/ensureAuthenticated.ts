import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/user/UsersRepository";
import { IPayload } from "./dtos/IPayload";

const ensureAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if(!authHeader) {
		throw new AppError('Token missing.', 401)
	}

	const [_, token] = authHeader.split(' ');

	try {
		const { sub: user_id } = verify(token, process.env.JWT_SECRET) as IPayload;

		req.user_id = user_id;

		const usersRepository = new UsersRepository();

		const user = await usersRepository.findById(user_id);

		if(!user) {
			throw new AppError("User doesen't exists.", 401)
		}

		next()
	} catch (error) {
		throw new AppError('Invalid token.', 401)
	}

	
}

export { ensureAuthenticated };