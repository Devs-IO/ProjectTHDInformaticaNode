import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import checkProductValidate from "../middlewares/checkProductsValidate";
import requestSchema from "../middlewares/checkProductsValidator";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', checkProductValidate(requestSchema), productsController.create);
productsRouter.get('/', productsController.findProductPage);
productsRouter.delete('/:id', productsController.delete);
productsRouter.get('/dev', productsController.find);
productsRouter.put('/uploadActive/:id', productsController.updateActive);
productsRouter.put('/:id', productsController.update);

export default productsRouter;
