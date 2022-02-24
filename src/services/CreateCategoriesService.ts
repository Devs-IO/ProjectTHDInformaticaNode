import ICreateCategoriesDTO from "dtos/ICreateCategoriesDTO";
import Categories from "../models/Categories";
import CategoriesRepository from "../repositories/CategoriesRepository";

class CreateCategoriesService {
  public async execute(data: ICreateCategoriesDTO): Promise<Categories | undefined> {
    const categoriesRepository = new CategoriesRepository();
    const category = await categoriesRepository.create(data);
    return category;
  };
};

export default CreateCategoriesService;
