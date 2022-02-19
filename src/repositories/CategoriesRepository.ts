import Categories from "../models/Categories";
import { getRepository, Repository } from "typeorm";
import ICategoriesRepository from "./interface/ICategoriesRepository";
import ICreateCategoriestDTO from "dtos/ICreateCategoriesDTO";


class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository <Categories>

  constructor () {
    this.ormRepository = getRepository(Categories)
  }

  async create (dataCategory: ICreateCategoriestDTO): Promise<Categories> {
    const category = this.ormRepository.create(dataCategory);
    await this.ormRepository.save(category)
    return category
  }
  async find(): Promise<Categories[]> {
    const category = await this.ormRepository.find();
    return category
  }

}

export default CategoriesRepository