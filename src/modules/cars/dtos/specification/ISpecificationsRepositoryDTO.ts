import { ICreateSpecificationDTO } from "./ICreateSpecificationDTO";
import { ISpecificationDTO } from "./ISpecificationDTO";

interface ISpecificationsRepositoryDTO {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<ISpecificationDTO>;
    list(): Promise<ISpecificationDTO[]>;
	findByIds(ids: string[]): Promise<ISpecificationDTO[]>;
};

export { ISpecificationsRepositoryDTO };