import { ICarDTO } from "@modules/cars/dtos/car/ICarDTO";
import { ICarsRepositoryDTO } from "@modules/cars/dtos/car/ICarsRepositoryDTO";
import { ICreateCarDTO } from "@modules/cars/dtos/car/ICreateCarDTO";
import { prismaClient } from "@prisma/index";

class CarsRepository implements ICarsRepositoryDTO {

	async findAvailable(brand?: string, categoryId?: string, name?: string): Promise<ICarDTO[]> {
		const cars = await prismaClient.car.findMany({
			where: {
				available: true,
				OR: [
					{ brand: { contains: brand } },
					{ categoryId: { contains: categoryId } },
					{ name: { contains: name } }
				]
			}
		});

		return cars;
	}

	async findByLicensePlate(licensePlate: string): Promise<ICarDTO> {
		const car = await prismaClient.car.findFirst({
			where: {
				licensePlate: licensePlate
			}
		});

		return car;
	};

	async create({ name, description, licensePlate, fineAmount, dailyRate, categoryId, brand }: ICreateCarDTO): Promise<ICarDTO> {
		const car = await prismaClient.car.create({
			data: {
				name,
				description,
				licensePlate,
				fineAmount,
				dailyRate,
				categoryId,
				brand
			}
		});

		return car;
	};
};

export { CarsRepository };