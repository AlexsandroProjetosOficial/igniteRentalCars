import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        await this.createSpecificationUseCase.execute({ name, description });

        return res.status(201).send();
    }
}

export { CreateSpecificationController };