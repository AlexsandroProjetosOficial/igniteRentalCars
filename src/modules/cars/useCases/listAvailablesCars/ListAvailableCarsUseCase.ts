import { ICarDTO } from "@modules/cars/dtos/car/ICarDTO";
import { ICarsRepositoryDTO } from "@modules/cars/dtos/car/ICarsRepositoryDTO";
import { IListCarsDTO } from "@modules/cars/dtos/car/IListCarsDTO";

class ListAvailableCarsUseCase {
	constructor(private carsRepository: ICarsRepositoryDTO) { }

	async execute({ categoryId, brand, name }: IListCarsDTO): Promise<ICarDTO[]> {

		const cars = await this.carsRepository.findAvailable(brand, categoryId, name);

		return cars;
	}
};

export { ListAvailableCarsUseCase };