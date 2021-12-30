import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase){};

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        await this.importCategoryUseCase.execute(file);

        return res.status(201).send();
    }
}

export { ImportCategoryController };