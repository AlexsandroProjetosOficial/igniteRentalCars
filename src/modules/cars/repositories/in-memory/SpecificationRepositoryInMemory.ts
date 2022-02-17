import { ICreateSpecificationDTO } from "@modules/cars/dtos/specification/ICreateSpecificationDTO";
import { ISpecificationDTO } from "@modules/cars/dtos/specification/ISpecificationDTO";
import { ISpecificationsRepositoryDTO } from "@modules/cars/dtos/specification/ISpecificationsRepositoryDTO";
import { Specification } from "./models/Specification";

class SpecificationRepositoryInMemory implements ISpecificationsRepositoryDTO {
	specifications: Specification[] = [];

	async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
		const specification = new Specification();

		Object.assign(specification, {
			name,
			description
		});

		this.specifications.push(specification);
	};

	async findByName(name: string): Promise<ISpecificationDTO> {
		return this.specifications.find(specification => specification.name === name);
	};

	async list(): Promise<ISpecificationDTO[]> {
		return this.specifications;
	};

	async findByIds(ids: string[]): Promise<ISpecificationDTO[]> {
		return this.specifications.filter(specification => ids.includes(specification.id));
	}

};

export { SpecificationRepositoryInMemory };