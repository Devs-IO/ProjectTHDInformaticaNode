import ProductsRepository from "../repositories/ProductsRepository";

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const productsRepository = new ProductsRepository();
    await productsRepository.deleteById(id);
  };
};

export default DeleteProductService;
