import { ICarDTO } from "./ICarDTO";
import { ICreateCarDTO } from "./ICreateCarDTO";

interface ICarsRepositoryDTO {
	create({ name, description, licensePlate, fineAmount, dailyRate, categoryId, brand }: ICreateCarDTO): Promise<ICarDTO>;
	findByLicensePlate(licensePlate: string): Promise<ICarDTO>;
	findAvailable(brand?: string, categoryId?: string, name?: string): Promise<ICarDTO[]>;
	findById(carId: string): Promise<ICarDTO>;
};

export { ICarsRepositoryDTO };