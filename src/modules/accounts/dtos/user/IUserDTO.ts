interface IUserDTO {
	id: string;
	name: string;
	password: string;
	email: string;
	driverLicence: string;
	isAdmin: boolean;
	avatar: string;
	createdAt: Date;
};

export { IUserDTO };