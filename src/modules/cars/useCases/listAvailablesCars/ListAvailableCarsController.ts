import { Request, Response } from 'express';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

class ListAvailableCarsController {
	constructor(private listAvailableCarsUseCase: ListAvailableCarsUseCase) {}

	async handle(req: Request, res: Response) {
		const { brand, name, categoryId } = req.query;

		const cars = await this.listAvailableCarsUseCase.execute({ 
			brand: brand as string,
			name: name as string,
			categoryId : categoryId as string
		});

		return res.status(200).json({
			status: 'Selected',
			message: 'Cars has been select successfully.',
			cars
		});
	}
}

export { ListAvailableCarsController };