import { AppError } from "@errors/AppError";
import { ICreateSpecificationDTO } from "@modules/cars/dtos/specification/ICreateSpecificationDTO";
import { ISpecificationsRepositoryDTO } from "@modules/cars/dtos/specification/ISpecificationsRepositoryDTO";


class CreateSpecificationUseCase {
    constructor (private specificationsRepository: ISpecificationsRepositoryDTO) {};

    async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);
        
        if(specificationAlreadyExists) {
            throw new AppError('Specification already exists.')
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };