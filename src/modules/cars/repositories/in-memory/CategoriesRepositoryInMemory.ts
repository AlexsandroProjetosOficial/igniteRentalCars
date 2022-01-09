
import { ICategoriesRepositoryDTO } from "@modules/cars/dtos/category/ICategoriesRepositoryDTO";
import { ICategoryDTO } from "@modules/cars/dtos/category/ICategoryDTO";
import { ICreateCategoryDTO } from "@modules/cars/dtos/category/ICreateCategoryDTO";
import { Category } from "./models/Category";

class CategoriesRepositoryInMemory implements ICategoriesRepositoryDTO {
	categories: Category[] = [];

	async findByName(name: string): Promise<ICategoryDTO> {
		const category = this.categories.find(category => category.name === name);

		return category;
	};

	async list(): Promise<ICategoryDTO[]> {
		const categories = this.categories;

		return categories;
	};

	async create({ name, description }: ICreateCategoryDTO): Promise<void> {
		const category = new Category();

		Object.assign(category, {
			name,
			description
		});

		this.categories.push(category);
	}

}

export { CategoriesRepositoryInMemory };