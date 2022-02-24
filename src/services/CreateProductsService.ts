import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import Products from "../models/Products";
import ProductsRepository from "../repositories/ProductsRepository";

class CreateProductsService {
  public async execute(data: ICreateProductsDTO): Promise<Products | undefined> {
    const productsRepository = new ProductsRepository();
    let product = await productsRepository.findByName(data.name);

    if (!product) {
      product = await productsRepository.create(data);
    };

    return product;
  };
};

export default CreateProductsService;
