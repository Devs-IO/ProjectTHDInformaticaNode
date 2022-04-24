import ProductsRepository from "../repositories/ProductsRepository";

class UpdateProductsActiveService {
  public async execute(id: string): Promise<void> {
    const productsRepository = new ProductsRepository();
    await productsRepository.updateByIdActive(id);
  };
};

export default UpdateProductsActiveService;
