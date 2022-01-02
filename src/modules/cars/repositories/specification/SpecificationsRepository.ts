import { prismaClient } from "../../../../prisma";
import { ICreateSpecificationDTO } from "../../dtos/ICreateSpecificationDTO";
import { ISpecificationDTO } from "../../dtos/ISpecificationDTO";
import { ISpecificationsRepositoryDTO } from "../../dtos/ISpecificationsRepositoryDTO";

class SpecificationRepository implements ISpecificationsRepositoryDTO {
    async list(): Promise<ISpecificationDTO[] > {
        const specifications = await prismaClient.specification.findMany();

		return specifications;
    }

    async findByName(name: string): Promise<ISpecificationDTO> {
		const specification = await prismaClient.specification.findFirst({
			where: {
				name: name
			}
		});

        return specification;
    };

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        await prismaClient.specification.create({
			data: {
				name,
				description
			}
		});
    };
}

export { SpecificationRepository };