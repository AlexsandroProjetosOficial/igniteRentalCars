import { ISpecificationDTO } from "@modules/cars/dtos/specification/ISpecificationDTO";
import { ISpecificationsRepositoryDTO } from "@modules/cars/dtos/specification/ISpecificationsRepositoryDTO";

class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationsRepositoryDTO){};

    async execute(): Promise<ISpecificationDTO[]> {
        const specifications = await this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };