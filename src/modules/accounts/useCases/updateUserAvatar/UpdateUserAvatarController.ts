import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
	constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}
	
	async handle(req: Request, res: Response): Promise<Response> {
		const user_id = req.user_id;
		const avatar_file = req.file.filename;

		console.log(user_id, avatar_file);
		await this.updateUserAvatarUseCase.execute({ user_id, avatar_file });

		return res.status(204).send();
	}
};

export { UpdateUserAvatarController };