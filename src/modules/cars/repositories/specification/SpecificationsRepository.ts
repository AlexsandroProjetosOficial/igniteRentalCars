import { Specification } from "../../models/Specification";
import { ICreateCategoryDTO } from "../category/ICategoriesRepository";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }
    
    list(): Specification[] {
        return this.specifications;
    }

    public static getInstance(): SpecificationRepository {
        if(!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;
    };

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date()
        });

        this.specifications.push(specification);
    };
}

export { SpecificationRepository };