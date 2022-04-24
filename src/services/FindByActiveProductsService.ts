import ProductsRepository from "../repositories/ProductsRepository";
import Products from "../models/Products";


class FindByActiveProductsService {
  public async execute(): Promise<Products[]> {
    const productsRepository = new ProductsRepository();
    const products = productsRepository.findByActive();
    return products;
  };
};

export default FindByActiveProductsService
