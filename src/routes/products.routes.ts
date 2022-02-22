import ProductsController from "../controllers/ProductsController";
import { Router } from "express";
import checkProductValidate from "../middlewares/checkProductsValidate";
import requestSchema from "../middlewares/checkProductsValidator";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', checkProductValidate(requestSchema), productsController.create);
productsRouter.get('/', productsController.findProductPage);
productsRouter.delete('/:id', productsController.delete)
productsRouter.get('/dev', productsController.find);
export default productsRouter;
