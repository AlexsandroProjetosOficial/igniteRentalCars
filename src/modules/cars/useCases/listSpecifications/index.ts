import { SpecificationRepository } from "../../repositories/specification/SpecificationsRepository";
import { ListEspecificationController } from "./ListEspecificationController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listSpecificationsController = new ListEspecificationController(listSpecificationsUseCase);

export { listSpecificationsController };