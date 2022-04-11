import { Router } from "express"
import StatusController from "../controllers/StatusController"


const statusRoute = Router();
const statusController = new StatusController();

statusRoute.post('/', statusController.create);
statusRoute.get('/', statusController.find);

export default statusRoute;
