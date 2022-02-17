import { ICreateSpecificationDTO } from "@modules/cars/dtos/specification/ICreateSpecificationDTO";
import { ISpecificationDTO } from "@modules/cars/dtos/specification/ISpecificationDTO";
import { ISpecificationsRepositoryDTO } from "@modules/cars/dtos/specification/ISpecificationsRepositoryDTO";
import { prismaClient } from "@prisma/index";


class SpecificationRepository implements ISpecificationsRepositoryDTO {
	async findByIds(ids: string[]): Promise<ISpecificationDTO[]> {
		let specificationIds = await prismaClient.specification.findMany({
			select: { id: true}
		});

		specificationIds = specificationIds.filter(element => element.id);

		console.log(specificationIds);
		return specificationIds;
	}
	
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