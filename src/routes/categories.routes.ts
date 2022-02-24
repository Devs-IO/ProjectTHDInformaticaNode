import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";
import checkCategoryValidate from "../middlewares/checkCategoriesValidate";
import requestSchema from "../middlewares/checkCategoriesValidator";

const categoriesRouter = Router();
const categoriesController = new CategoriesController;

categoriesRouter.post('/', checkCategoryValidate(requestSchema), categoriesController.create);
categoriesRouter.get('/', categoriesController.find)

export default categoriesRouter;
