import fs from 'fs';
import { parse } from 'csv-parse';

class ImportCategoryUseCase {
    async execute(file: Express.Multer.File): Promise<void> {
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();

        stream.pipe(parseFile);

        parseFile.on('data', async (line) => {
            console.log(line);
        })
    }
}

export { ImportCategoryUseCase };