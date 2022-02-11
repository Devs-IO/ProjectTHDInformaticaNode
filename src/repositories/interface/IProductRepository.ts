import ICreateProductDTO from "dtos/ICreateProductDTO";
import Products from "models/Products";

export default interface IProductsRepository {
  create(dataProduct: ICreateProductDTO): Promise<Products>;
  find(): Promise<Products[]>;
  findByName(nameData: string): Promise<Products | undefined>;
}
