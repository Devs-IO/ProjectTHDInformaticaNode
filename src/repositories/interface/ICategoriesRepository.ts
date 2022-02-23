import ICreateCategoriestDTO from "../../dtos/ICreateCategoriesDTO";
import Categories from "../../models/Categories";

export default interface ICategoriesRepository {
  create(dataCategory: ICreateCategoriestDTO): Promise<Categories>;
  find(): Promise<Categories[]>;
  findById(idData: string): Promise<Categories>;
}
