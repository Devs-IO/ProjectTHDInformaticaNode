import SellsController from "../controllers/SellsController";
import { Router } from "express";



const sellsRouter = Router();
const sellsController = new SellsController()

sellsRouter.post("/", sellsController.create);
sellsRouter.get("/", sellsController.find);
sellsRouter.get("/:id", sellsController.findByClientId);
sellsRouter.delete("/:id", sellsController.deleteById);
sellsRouter.put("/:id", sellsController.updateById);

export default sellsRouter;
