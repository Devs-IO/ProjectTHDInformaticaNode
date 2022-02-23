import Categories from "../models/Categories"
import CategoriesRepository from "../repositories/CategoriesRepository";

interface request {
  name:string,
}
class CreateCategoriesService {
  public async execute (data:request): Promise<Categories | undefined> {
    const categoriesRepository = new CategoriesRepository();
    const category = await categoriesRepository.create(data);
    return category;
  };
};

export default CreateCategoriesService;
