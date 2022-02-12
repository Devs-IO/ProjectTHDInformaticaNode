import ProvidersController from "../controllers/ProviderController";
import { Router } from "express";


const providerRouter = Router()
const providersController = new ProvidersController()

providerRouter.post('/', providersController.create)
providerRouter.get('/', providersController.find)

export default providerRouter;
