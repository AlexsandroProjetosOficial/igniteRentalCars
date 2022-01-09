import { v4 as uuidV4 } from 'uuid';

class User {
	id: string;
	name: string;
	password: string;
	email: string;
	driverLicence: string;
	isAdmin: boolean;
	avatar: string;
	createdAt: Date;

	constructor() {
		if(!this.id) {
			this.id = uuidV4();
		}

		if(!this.createdAt) {
			this.createdAt = new Date();
		}

		if(!this.isAdmin) {
			this.isAdmin = false;
		}
	}
}

export { User };