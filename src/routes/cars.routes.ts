import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";
import { ensureLogging } from "@middlewares/ensureLogging";
import { createCarController } from "@modules/cars/useCases/createCar";
import { listAvailableCarsController } from "@modules/cars/useCases/listAvailablesCars";
import { Router } from "express";

const carsRoutes = Router();

carsRoutes.use(ensureAuthenticated);
carsRoutes.use(ensureLogging);
carsRoutes.post('/', ensureAdmin, async (req, res) => await createCarController.handle(req, res));
carsRoutes.get('/available', async (req, res) => await listAvailableCarsController.handle(req, res));

export { carsRoutes };