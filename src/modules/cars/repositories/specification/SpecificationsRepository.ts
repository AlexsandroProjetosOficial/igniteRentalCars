import { prismaClient } from "../../../../prisma";
import { Specification } from "../../models/Specification";
import { ICreateCategoryDTO } from "../category/ICategoriesRepository";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    async list(): Promise<Specification[] > {
        const specifications = await prismaClient.specification.findMany();

		return specifications;
    }

    async findByName(name: string): Promise<Specification> {
		const specification = await prismaClient.specification.findFirst({
			where: {
				name: name
			}
		});

        return specification;
    };

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        await prismaClient.specification.create({
			data: {
				name,
				description
			}
		});
    };
}

export { SpecificationRepository };