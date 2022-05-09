import Products from "../models/Products";
import ProductsRepository from "../repositories/ProductsRepository";


class FindByActiveProductsService {
  public async execute(): Promise<Products[]> {
    const productsRepository = new ProductsRepository();
    const products = await productsRepository.findByActive();
    return products;
  };
};

export default FindByActiveProductsService
