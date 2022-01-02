import { AppError } from "../../../../errors/AppError";
import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";

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