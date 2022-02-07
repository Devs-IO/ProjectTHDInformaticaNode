import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import checksClientValidate from "../middlewares/checksClientValidate";
import requestSchema from "../middlewares/checksClientValidator";

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', checksClientValidate(requestSchema), clientsController.create);
clientsRouter.get('/', clientsController.find);

export default clientsRouter;
