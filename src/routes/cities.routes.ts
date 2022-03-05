import { Router } from "express";
import CitiesController from "../controllers/CitiesController";
import checksCitiesValidate from "../middlewares/checksCitiesValidate";
import requestSchema from "../middlewares/checksCitiesValidator";

const citiesRouter = Router();
const citiesController = new CitiesController();

citiesRouter.post('/', checksCitiesValidate(requestSchema), citiesController.create);
citiesRouter.get('/', citiesController.find);

export default citiesRouter;
