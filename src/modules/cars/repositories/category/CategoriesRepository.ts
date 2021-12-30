import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";
import { prismaClient } from "../../../../prisma";

class CategoriesRepository implements ICategoriesRepository {
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        await prismaClient.category.create({
			data: {
				name,
				description
			}
		});
    }

    async list(): Promise<Category[]> {
        const categories = await prismaClient.category.findMany();

		return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await prismaClient.category.findFirst({
			where: {
				name: name
			}
		});

        return category;
    }
}

export { CategoriesRepository }