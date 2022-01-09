import { AppError } from "@errors/AppError";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
	})

	it('Should be able to a new car', async () => {
		const car = await createCarUseCase.execute({
			name: 'Name Car Test',
			description: 'Description Car Test',
			dailyRate: 100,
			licensePlate: 'ABC-1234',
			fineAmount: 60,
			brand: 'Brand Car Test',
			categoryId: 'Category ID Test'
		});

		expect(car).toHaveProperty('id');
	});

	it('Should not be able to create a car with exists license plate', async () => {
		expect(async () => {
			await createCarUseCase.execute({
				name: 'Name Car Test 1',
				description: 'Description Car Test',
				dailyRate: 100,
				licensePlate: 'ABC-1234',
				fineAmount: 60,
				brand: 'Brand Car Test',
				categoryId: 'Category ID Test'
			});

			await createCarUseCase.execute({
				name: 'Name Car Test 2',
				description: 'Description Car Test',
				dailyRate: 100,
				licensePlate: 'ABC-1234',
				fineAmount: 60,
				brand: 'Brand Car Test',
				categoryId: 'Category ID Test'
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it('Should not be able to create a car with available true by default', async () => {
		const car = await createCarUseCase.execute({
			name: 'Car Available',
			description: 'Description Car Test',
			dailyRate: 100,
			licensePlate: 'ABCD-1234',
			fineAmount: 60,
			brand: 'Brand Car Test',
			categoryId: 'Category ID Test'
		});
		
		expect(car.available).toBe(true);
	});
});