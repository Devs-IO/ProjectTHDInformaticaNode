import { Request, Response } from "express"
import FindCategoryService from "../services/FindCategoryService";
import CreateCategoriesService from "../services/CreateCategoriesService";


export default class CategoriesController {
  public async create (request:Request, response:Response) {
    const { name } = request.body;
    const createCategoriesService = new CreateCategoriesService();
    const category = await createCategoriesService.execute({ name });

    return response.status(201).json(category);
  };
  public async find(request: Request, response: Response) {
    const findCategoryService = new FindCategoryService;

    const categories =  await findCategoryService.execute();

    return response.status(201).json(categories);
  }
};
