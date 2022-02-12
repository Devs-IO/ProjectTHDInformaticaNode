import Categories from "../models/Categories"
import CategoriesRepository from "../repositories/CategoriesRepository";


interface request {
  name:string,
};

class CreateCategoriesService {
  public async execute (data: request): Promise<Categories | undefined> {
    const categoryRepository = new CategoriesRepository;
    const category = await categoryRepository.create(data);
    return category;
  };
};

export default CreateCategoriesService;
