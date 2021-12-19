import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListEspecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {};

    async handle(req: Request, res: Response): Promise<Response> {
        const specifications = await this.listSpecificationUseCase.execute();

        return res.status(200).json({
            message: 'Specifications has been selected successfully.',
            specifications
        })
    }
}

export { ListEspecificationController };