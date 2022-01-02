import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";
import { ICategoryDTO } from "../../dtos/ICategoryDTO";

class ListCategoriesUseCase {
    constructor (private categoriesRepository: ICategoriesRepositoryDTO) {};

    async execute(): Promise<ICategoryDTO[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };