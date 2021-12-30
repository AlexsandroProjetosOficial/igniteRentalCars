import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/category/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on('data', async (line) => {
                const [name, description] = line;

                categories.push({
                    name,
                    description
                });
            }).on('end', () => {
                resolve(categories);
                fs.promises.unlink(file.path);
            }).on('error', (err) => {
                reject(err);
            });
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {

            const { name, description } = category;

            const existCategory = await this.categoriesRepository.findByName(name);

            if (existCategory) {
                throw new Error('Category already exists.')
            }

            await this.categoriesRepository.create({
                name,
                description
            });
        });
    }
}

export { ImportCategoryUseCase };