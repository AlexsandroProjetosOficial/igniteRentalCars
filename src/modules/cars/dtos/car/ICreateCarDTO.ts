interface ICreateCarDTO {
	name: string;
	description: string;
	dailyRate: number;
	licensePlate: string;
	fineAmount: number;
	brand: string;
	categoryId: string;
};

export { ICreateCarDTO };