import ProductsController from "../controllers/ProductsController";
import { Router, Request, Response } from "express";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);

export default productsRouter;
