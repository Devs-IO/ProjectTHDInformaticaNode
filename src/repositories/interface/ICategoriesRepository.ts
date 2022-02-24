import ICreateCategoriesDTO from "../../dtos/ICreateCategoriesDTO";
import Categories from "../../models/Categories";

export default interface ICategoriesRepository {
  create(dataCategory: ICreateCategoriesDTO): Promise<Categories>;
  find(): Promise<Categories[]>;
  findById(idData: string): Promise<Categories>;
}
