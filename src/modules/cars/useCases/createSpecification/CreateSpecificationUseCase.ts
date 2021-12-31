import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../repositories/specification/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor (private specificationsRepository: ISpecificationsRepository) {};

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);
        
        if(specificationAlreadyExists) {
            throw new AppError('Specification already exists.')
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };