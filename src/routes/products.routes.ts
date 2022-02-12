import ProductsController from "../controllers/ProductsController";
import { Router } from "express";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.find);

export default productsRouter;
