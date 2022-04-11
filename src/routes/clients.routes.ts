import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import checksClientValidate from "../middlewares/checksClientsValidate";
import requestSchema from "../middlewares/checksClientValidator";

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', checksClientValidate(requestSchema), clientsController.create);
clientsRouter.get('/', clientsController.find);
clientsRouter.delete('/:id', clientsController.delete);
clientsRouter.put('/:id', clientsController.update);

export default clientsRouter;
