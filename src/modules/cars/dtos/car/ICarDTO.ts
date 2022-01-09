interface ICarDTO {
	id: string;
    name: string;
    description: string;
	dailyRate: number;
	available: boolean;
	licensePlate: string;
	fineAmount: number;
	brand: string;
	categoryId: string;
    createdAt: Date;
};

export { ICarDTO };