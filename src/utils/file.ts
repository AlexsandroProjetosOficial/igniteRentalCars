import fs from 'fs';

const file = async (filename: string) => {
	try {
		await fs.promises.stat(filename);
	} catch (error) {
		return;
	}

	await fs.promises.unlink(filename);
}

export { file };