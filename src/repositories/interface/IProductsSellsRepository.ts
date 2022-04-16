import ICreateProductsSellsDTO from "../../dtos/ICreateProductsSellsDTO";
import ProductsSells from "../../models/ProductsSells";


export default interface IProductsSellsRepository {
  create(dataProductsSells: ICreateProductsSellsDTO): Promise<ProductsSells>;
  find(): Promise<ProductsSells[]>;
  findBySellsId(sellsId: string): Promise<ProductsSells[] | void>;
  deleteById(id: string): Promise<void>;
  updateById(dataProductsSells: ICreateProductsSellsDTO, id: string): Promise<void>;
};
