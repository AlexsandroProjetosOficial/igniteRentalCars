import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post('/', async (req, res) => await createSpecificationController.handle(req, res));
specificationsRoutes.get('/', async (req, res) => await listSpecificationsController.handle(req, res));

export { specificationsRoutes };