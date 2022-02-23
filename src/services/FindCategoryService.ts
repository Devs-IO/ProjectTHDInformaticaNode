import Categories from "../models/Categories";
import CategoriesRepository from "../repositories/CategoriesRepository";

class FindCategoryService {
  public async execute(): Promise<Categories[]> {
    const categoriesRepository = new CategoriesRepository();
    let category = await categoriesRepository.find();
    return category;
  };
};

export default FindCategoryService;
