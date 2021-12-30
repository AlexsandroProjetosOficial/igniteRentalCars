import { SpecificationRepository } from "../../repositories/specification/SpecificationsRepository";
import { ListEspecificationController } from "./ListEspecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = new SpecificationRepository();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListEspecificationController(listSpecificationsUseCase);

export { listSpecificationsController };