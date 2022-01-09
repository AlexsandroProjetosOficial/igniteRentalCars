import { CarsRepository } from "@modules/cars/repositories/car/CarsRepositry";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const carsRespository = new CarsRepository();

const createCarUseCase = new CreateCarUseCase(carsRespository);

const createCarController = new CreateCarController(createCarUseCase);

export { createCarController };