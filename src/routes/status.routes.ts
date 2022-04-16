import { Router } from "express"
import CheckStatusValidate from "../middlewares/checkStatusValidate";
import requestSchema from "../middlewares/checkStatusValidator";
import StatusController from "../controllers/StatusController"


const statusRoute = Router();
const statusController = new StatusController();

statusRoute.post('/',CheckStatusValidate(requestSchema) , statusController.create);
statusRoute.get('/', statusController.find);

export default statusRoute;
