import ICreateProductsDTO from "dtos/ICreateProductsDTO";
import Products from "models/Products";

export default interface IProductsRepository {
  create(dataProduct: ICreateProductsDTO): Promise<Products>;
  find(): Promise<Products[]>;
  findByName(nameData: string): Promise<Products | undefined>;
  deleteById(id:string):Promise<void>;
}
