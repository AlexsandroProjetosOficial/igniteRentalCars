import { Router } from 'express';
import { authenticateUserController } from '../modules/accounts/useCases/authenticateUser';

const authenticateRoutes = Router();

authenticateRoutes.post('/', async (req, res) => await authenticateUserController.handle(req, res));

export { authenticateRoutes };