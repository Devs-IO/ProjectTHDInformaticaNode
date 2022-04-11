import ICreateProductsDTO from '../dtos/ICreateProductsDTO';
import ProductsRepository from '../repositories/ProductsRepository';


class UpdateProductService {
  public async execute(data: ICreateProductsDTO, id: string): Promise<void> {
    const productRepository = new ProductsRepository();
    await productRepository.updateById(data, id);
  };
};

export default UpdateProductService;
