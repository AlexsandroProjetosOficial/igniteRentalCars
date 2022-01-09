import { AppError } from "@errors/AppError";
import { ICarDTO } from "@modules/cars/dtos/car/ICarDTO";
import { ICarsRepositoryDTO } from "@modules/cars/dtos/car/ICarsRepositoryDTO";
import { ICreateCarDTO } from "@modules/cars/dtos/car/ICreateCarDTO";

class CreateCarUseCase {
	constructor(private carsRepository: ICarsRepositoryDTO) {}
	
	async execute({ name, description, dailyRate, licensePlate, fineAmount, brand, categoryId }: ICreateCarDTO): Promise<ICarDTO> {
		const carAlreadyExists = await this.carsRepository.findByLicensePlate(licensePlate);

		if(carAlreadyExists) {
			throw new AppError('Car already exists.');
		}

		const car = await this.carsRepository.create({
			name,
			description,
			dailyRate,
			licensePlate,
			fineAmount,
			brand,
			categoryId
		});

		return car;
	}
};

export { CreateCarUseCase };