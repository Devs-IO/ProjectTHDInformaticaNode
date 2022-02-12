import Categories from "../models/Categories";
import CategoriesRepository from "../repositories/CategoriesRepository";

class FindCategoryService {
  public async execute(): Promise<Categories[]> {

    const categoriesRepository = new CategoriesRepository();

    let categories = await categoriesRepository.find();

    return categories;
  };
};

export default FindCategoryService;
