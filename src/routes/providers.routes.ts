import ProvidersController from "../controllers/ProviderController";
import { Router } from "express";
import checkProviderValidate from "../middlewares/checkProviderValidate";
import requestSchema from "../middlewares/checkProviderValidator";


const providerRouter = Router()
const providersController = new ProvidersController()

providerRouter.post('/', checkProviderValidate(requestSchema), providersController.create)
providerRouter.get('/', providersController.find)

export default providerRouter;
