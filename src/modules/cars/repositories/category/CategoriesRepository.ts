import { Category } from "../../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";
import { prismaClient, PrismaClient } from '../../../../prisma';

class CategoriesRepository implements ICategoriesRepository{
    private prisma: PrismaClient;

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.prisma = prismaClient;
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        await this.prisma.category.create({
			data: {
				name,
				description
			}
		});
    }

    async list(): Promise<Category[]> {
        const allCategories = await this.prisma.category.findMany();

		return allCategories;
    }

    async findByName(name: string): Promise<Category> {
        const category = this.prisma.category.findFirst({
			where: {
				name
			}
		});

        return category;
    }
}

export { CategoriesRepository }