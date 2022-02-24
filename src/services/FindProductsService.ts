import Products from "../models/Products";
import ProductsRepository from "../repositories/ProductsRepository";

class FindProductService {
  public async execute(): Promise<Products[]> {
    const productsRepository = new ProductsRepository();
    let products = await productsRepository.find();
    return products;
  }
}

export default FindProductService;
