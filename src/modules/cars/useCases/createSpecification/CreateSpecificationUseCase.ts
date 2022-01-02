import { AppError } from "../../../../errors/AppError";
import { ICreateSpecificationDTO } from "../../dtos/ICreateSpecificationDTO";
import { ISpecificationsRepositoryDTO } from "../../dtos/ISpecificationsRepositoryDTO";

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