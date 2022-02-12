import CategoriesController from "../controllers/CategoriesController";
import { Router } from "express";

const categoriesRouter = Router();
const categoriesController = new CategoriesController

categoriesRouter.post('/', categoriesController.create);
categoriesRouter.get('/', categoriesController.find)

export default categoriesRouter;
