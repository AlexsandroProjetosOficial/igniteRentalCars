import { Specification } from "../../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
};

export { ISpecificationsRepository, ICreateSpecificationDTO };