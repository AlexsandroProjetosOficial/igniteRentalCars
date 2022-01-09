import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureLogging } from '@middlewares/ensureLogging';
import { ensureAdmin } from '@middlewares/ensureAdmin';

const categoriesRoutes = Router();

const uploadCategories = multer(uploadConfig.upload('/tmp'));

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.use(ensureLogging);
categoriesRoutes.post('/', ensureAdmin, async (req, res) => await createCategoryController.handle(req, res));
categoriesRoutes.post('/import', ensureAdmin, uploadCategories.single('file'), async (req, res) => await importCategoryController.handle(req, res));
categoriesRoutes.get('/', async (req, res) => await listCategoriesController.handle(req, res));

export { categoriesRoutes };
