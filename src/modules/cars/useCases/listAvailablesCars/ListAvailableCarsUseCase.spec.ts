import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
	beforeEach(() => {
		carsRepositoryInMemory = new CarsRepositoryInMemory();
		listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
	});

	it('Should be able to list all available cars', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car Test',
			description: 'Car description Test',
			dailyRate: 300.00,
			licensePlate: 'ABC-1111',
			fineAmount: 200.00,
			brand: 'Car Brand Test',
			categoryId: 'category ID Test'
		});

		const cars = await listAvailableCarsUseCase.execute({});

		expect(cars).toEqual([car]);
	});

	it('Should be able to list all available cars by name', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car Test 2',
			description: 'Car description Test',
			dailyRate: 300.00,
			licensePlate: 'ABC-1111',
			fineAmount: 200.00,
			brand: 'Car Brand Test',
			categoryId: 'category ID Test'
		});

		const cars = await listAvailableCarsUseCase.execute({name: 'Car Test 2'});

		expect(cars).toEqual([car]);
	});

	it('Should be able to list all available cars by brand', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car Test 3',
			description: 'Car description Test',
			dailyRate: 300.00,
			licensePlate: 'ABC-1111',
			fineAmount: 200.00,
			brand: 'Car Brand Test',
			categoryId: 'category ID Test'
		});

		const cars = await listAvailableCarsUseCase.execute({brand: 'Car Brand Test'});

		expect(cars).toEqual([car]);
	});

	it('Should be able to list all available cars by category', async () => {
		const car = await carsRepositoryInMemory.create({
			name: 'Car Test 3',
			description: 'Car description Test',
			dailyRate: 300.00,
			licensePlate: 'ABC-1111',
			fineAmount: 200.00,
			brand: 'Car Brand Test',
			categoryId: '12345'
		});

		const cars = await listAvailableCarsUseCase.execute({categoryId: '12345'});

		expect(cars).toEqual([car]);
	});
});