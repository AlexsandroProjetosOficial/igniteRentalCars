import { ICarDTO } from "@modules/cars/dtos/car/ICarDTO";
import { ICarsRepositoryDTO } from "@modules/cars/dtos/car/ICarsRepositoryDTO";
import { ICreateCarDTO } from "@modules/cars/dtos/car/ICreateCarDTO";
import { Car } from "./models/Car";

class CarsRepositoryInMemory implements ICarsRepositoryDTO {
	cars: Car[] = [];
	
	async findById(carId: string): Promise<ICarDTO> {
		return this.cars.find(car => car.id === carId);
	};

	async findAvailable( categoryId?: string, brand?: string, name?: string) : Promise<ICarDTO[]> {
		const carsAvailable = this.cars.filter(car => {
			if (car.available === true ||
				((brand && car.brand === brand) ||
				(categoryId && car.categoryId === categoryId) ||
				(name && car.name === name))
			) {
				return car;
			};

			return null;
		});

		return carsAvailable;
	};

	async findByLicensePlate(licensePlate: string): Promise<ICarDTO> {
		return this.cars.find((car) => car.licensePlate === licensePlate);
	};

	async create({ name, description, licensePlate, fineAmount, dailyRate, categoryId, brand }: ICreateCarDTO): Promise<ICarDTO> {
		const car = new Car();

		Object.assign(car, {
			name,
			description,
			licensePlate,
			fineAmount,
			dailyRate,
			categoryId,
			brand
		});

		this.cars.push(car);

		return car;
	};
};

export { CarsRepositoryInMemory };