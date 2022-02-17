import { AppError } from "@errors/AppError";
import { ICarsRepositoryDTO } from "@modules/cars/dtos/car/ICarsRepositoryDTO";
import { ISpecificationsRepositoryDTO } from "@modules/cars/dtos/specification/ISpecificationsRepositoryDTO";

interface IRequest {
	carId: string;
	specificationId: string[];
}

class CreateCarSpecificationUseCase {
	constructor(
		private carsRepository: ICarsRepositoryDTO,
		private specificationRepository: ISpecificationsRepositoryDTO
	) {}

	async execute({ carId, specificationId }: IRequest): Promise<void> {
		const carExists = await this.carsRepository.findById(carId);

		if (!carExists) {
			throw new AppError(`Car doesn't exists.`);
		}

		const specifications = await this.specificationRepository.findByIds(specificationId);

		console.log(specifications);
		// carExists.specificationsCars = specifications
	}
};

export { CreateCarSpecificationUseCase };