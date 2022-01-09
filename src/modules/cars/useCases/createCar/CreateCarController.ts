import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
	constructor(private createCarUseCase: CreateCarUseCase) { }

	async handle(req: Request, res: Response): Promise<Response> {
		const {
			name,
			description,
			dailyRate,
			licensePlate,
			fineAmount,
			brand,
			categoryId
		} = req.body;

		const car = await this.createCarUseCase.execute({
			name,
			description,
			dailyRate,
			licensePlate,
			fineAmount,
			brand,
			categoryId
		});

		return res.status(201).json({
			status: 'Created.',
			message: 'Car has been created successfully.',
			car
		});
	}
};

export { CreateCarController };