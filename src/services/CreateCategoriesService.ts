import Categories from "../models/Categories"
import CategoriesRepository from "../repositories/CategoriesRepository";

class CreateCategoriesService {
  public async execute (name:string): Promise<Categories | undefined> {
    const categoriesRepository = new CategoriesRepository();
    const category = await categoriesRepository.create({name});
    return category;
  };
};

export default CreateCategoriesService;
