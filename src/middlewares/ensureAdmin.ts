import { AppError } from "@errors/AppError";
import { UsersRepository } from "@modules/accounts/repositories/user/UsersRepository";
import { NextFunction, Request, Response } from "express";

const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
	const user_id = req.user_id;

	const usersRepository = new UsersRepository();

	const user = await usersRepository.findById(user_id);

	if(!user.isAdmin) {
		throw new AppError(`User isn't admin.`)
	}

	return next();
};

export { ensureAdmin };