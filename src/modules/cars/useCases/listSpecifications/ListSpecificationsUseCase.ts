import { ISpecificationDTO } from "../../dtos/ISpecificationDTO";
import { ISpecificationsRepositoryDTO } from "../../dtos/ISpecificationsRepositoryDTO";

class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationsRepositoryDTO){};

    async execute(): Promise<ISpecificationDTO[]> {
        const specifications = await this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };