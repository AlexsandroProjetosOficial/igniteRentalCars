import { AppError } from "@errors/AppError";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase"

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car Specification', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory);
	});

	it('It Should not be possible to add a specificationCar of a new, non-existing car', async () => {
		expect(async () => {
			const carId = '1234';
			const specificationId = ['54321'];

			await createCarSpecificationUseCase.execute({ carId, specificationId });
		}).rejects.toBeInstanceOf(AppError);
	});

	it('Should be able to add a new car specification to the car', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Name Car Test',
			description: 'Description Car Test',
			dailyRate: 100,
			licensePlate: 'ABC-1234',
			fineAmount: 60,
			brand: 'Brand Car Test',
			categoryId: 'Category ID Test'
		});

		const specificationId = ['54321'];

		await createCarSpecificationUseCase.execute({ carId: car.id, specificationId });
	});
})