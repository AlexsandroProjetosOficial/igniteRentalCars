import { CarsRepository } from "@modules/cars/repositories/car/CarsRepositry";
import { ListAvailableCarsController } from "./ListAvailableCarsController";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

const carsRepository = new CarsRepository;

const listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);

const listAvailableCarsController = new ListAvailableCarsController(listAvailableCarsUseCase);

export { listAvailableCarsController };