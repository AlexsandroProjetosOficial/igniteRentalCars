import { ICategoryDTO } from "./ICategoryDTO";
import { ICreateCategoryDTO } from "./ICreateCategoryDTO";

interface ICategoriesRepositoryDTO {
    findByName(name: string): Promise<ICategoryDTO>;
    list(): Promise<ICategoryDTO[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepositoryDTO };