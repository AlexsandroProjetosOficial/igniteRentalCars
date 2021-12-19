import { Specification } from "../../models/Specification";
import { SpecificationRepository } from "../../repositories/specification/SpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationRepository: SpecificationRepository){};

    async execute(): Promise<Specification[]> {
        const specifications = this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };