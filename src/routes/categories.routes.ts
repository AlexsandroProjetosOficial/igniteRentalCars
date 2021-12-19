import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp'
});

categoriesRoutes.post('/', async (req, res) => await createCategoryController.handle(req, res));
categoriesRoutes.post('/import', upload.single('file'), async (req, res) => await importCategoryController.handle(req, res));
categoriesRoutes.get('/', async (req, res) => await listCategoriesController.handle(req, res));

export { categoriesRoutes };
