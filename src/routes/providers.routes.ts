import { Router } from "express";
import ProvidersController from "../controllers/ProvidersController";
import checkProvidersValidate from "../middlewares/checkProvidersValidate";
import requestSchema from "../middlewares/checkProvidersValidator";


const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.post('/', checkProvidersValidate(requestSchema), providersController.create);
providersRouter.get('/', providersController.find);

export default providersRouter;
