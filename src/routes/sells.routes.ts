import { Router } from "express";
import SellsController from "../controllers/SellsController";

const sellsRouter = Router();
const sellsController = new SellsController()

sellsRouter.post("/", sellsController.create);
sellsRouter.get("/", sellsController.find);
sellsRouter.get("/client/:id", sellsController.findByClientId);
sellsRouter.delete("/:id", sellsController.deleteById);
sellsRouter.put("/:id", sellsController.updateById);
sellsRouter.get("/:id", sellsController.findById);

export default sellsRouter;
