import { AppError } from "@errors/AppError";
import { ICategoriesRepositoryDTO } from "@modules/cars/dtos/category/ICategoriesRepositoryDTO";
import { ICreateCategoryDTO } from "@modules/cars/dtos/category/ICreateCategoryDTO";


class CreateCategoryUseCase {
    constructor (private categoriesRepository: ICategoriesRepositoryDTO) {};

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError('Category already exists');
        }

        await this.categoriesRepository.create({ name, description });
    }
};

export { CreateCategoryUseCase };