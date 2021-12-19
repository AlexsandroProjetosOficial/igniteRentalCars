import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/category/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor (private categoriesRepository: ICategoriesRepository ) {};

    async execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };