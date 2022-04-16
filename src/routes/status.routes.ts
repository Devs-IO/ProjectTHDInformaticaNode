import { Router } from "express";
import StatusController from "../controllers/StatusController";
import CheckStatusValidate from "../middlewares/checkStatusValidate";
import requestSchema from "../middlewares/checkStatusValidator";


const statusRouter = Router();
const statusController = new StatusController();

statusRouter.post('/', CheckStatusValidate(requestSchema), statusController.create);
statusRouter.get('/', statusController.find);

export default statusRouter;
