import CategoriesController from "../controllers/CategoriesController";
import { Router } from "express";
import checkCategoryValidate from "../middlewares/checkCategoryvalidate";
import requestSchema from "../middlewares/checkCategoryvalidator";

const categoriesRouter = Router();
const categoriesController = new CategoriesController

categoriesRouter.post('/', checkCategoryValidate(requestSchema), categoriesController.create);
categoriesRouter.get('/', categoriesController.find)

export default categoriesRouter;
