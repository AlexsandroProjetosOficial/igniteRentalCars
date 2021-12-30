import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
    constructor (private listCategoriesUseCase: ListCategoriesUseCase) {};

    async handle(req: Request, res: Response): Promise<Response> {
        const categories = await this.listCategoriesUseCase.execute();

        return res.status(200).json({
            message: 'Categories has been selected successfully.',
            categories
        });
    }
}

export { ListCategoriesController };