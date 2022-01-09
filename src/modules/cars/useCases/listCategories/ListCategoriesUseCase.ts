import { ICategoriesRepositoryDTO } from "@modules/cars/dtos/category/ICategoriesRepositoryDTO";
import { ICategoryDTO } from "@modules/cars/dtos/category/ICategoryDTO";

class ListCategoriesUseCase {
    constructor (private categoriesRepository: ICategoriesRepositoryDTO) {};

    async execute(): Promise<ICategoryDTO[]> {
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };