import ICreateCategoriesDTO from "dtos/ICreateCategoriesDTO";
import { getRepository, Repository } from "typeorm";
import Categories from "../models/Categories";
import ICategoriesRepository from "./interface/ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Categories>;

  constructor() {
    this.ormRepository = getRepository(Categories);
  };

  async create(dataCategory: ICreateCategoriesDTO): Promise<Categories> {
    const category = this.ormRepository.create(dataCategory);
    await this.ormRepository.save(category);
    return category;
  };

  async find(): Promise<Categories[]> {
    const categories = await this.ormRepository.find();
    return categories;
  };

  async findById(idData: string): Promise<Categories> {
    const category = await this.ormRepository.findOne({
      where: [
        { id: idData },
      ],
    });
    return category!;
  };
};

export default CategoriesRepository;
