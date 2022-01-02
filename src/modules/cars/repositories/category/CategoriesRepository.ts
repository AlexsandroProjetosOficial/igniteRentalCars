import { prismaClient } from "../../../../prisma";
import { ICategoryDTO } from "../../dtos/ICategoryDTO";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ICategoriesRepositoryDTO } from "../../dtos/ICategoriesRepositoryDTO";

class CategoriesRepository implements ICategoriesRepositoryDTO {
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        await prismaClient.category.create({
			data: {
				name,
				description
			}
		});
    }

    async list(): Promise<ICategoryDTO[]> {
        const categories = await prismaClient.category.findMany();

		return categories;
    }

    async findByName(name: string): Promise<ICategoryDTO> {
        const category = await prismaClient.category.findFirst({
			where: {
				name: name
			}
		});

        return category;
    }
}

export { CategoriesRepository }