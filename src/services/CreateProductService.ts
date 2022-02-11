import Products from "models/Products";
import ProductsRepository from "../repositories/ProductRepository";


interface request {
  name:string,
  sell_price:string,
  buy_price:string,
  description?:string,
  quantity:string,
  code?:string,
};
class CreateProductService {
  async execute (data: request):Promise <Products | undefined>{
    const productsRepository = new ProductsRepository();

    let product = await productsRepository.findByName(data.name);

    if (!product) {
      product = await productsRepository.create(data)
    }
    return product
  };
};

export default CreateProductService
