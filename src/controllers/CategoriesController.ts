import { Request, Response } from "express";
import CreateCategoriesService from "../services/CreateCategoriesService";
import FindCategoryService from "../services/FindCategoryService";


export default class CategoriesController {
  public async create(request: Request, response: Response): Promise<Response | void> {
    const { name } = request.body;
    const createCategoriesService = new CreateCategoriesService();
    const category = await createCategoriesService.execute({ name });
    return response.status(201).json(category);
  };

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findCategoryService = new FindCategoryService;
    const categories = await findCategoryService.execute();
    return response.status(200).json(categories);
  };
};
