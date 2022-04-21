import CategoriesRepository from "../repositories/CategoriesRepository";
import ProductsRepository from "../repositories/ProductsRepository";
import ProvidersRepository from "../repositories/ProvidersRepository";

interface IProductsPage {
  id: string,
  name: string,
  categories_name?: string,
  providers_name?: string,
  sell_price: string,
  buy_price: string,
  description?: string,
  quantity: string,
  code?: string,
};

class FindProductPageService {
  public async execute() {

    const productsRepository = new ProductsRepository();
    const categoriesRepository = new CategoriesRepository();
    const providersRepository = new ProvidersRepository();

    const products = await productsRepository.find();
    const productsPage: IProductsPage[] = [];

    for (const element of products) {
      const category = await categoriesRepository.findById(element.category_id);
      const provider = await providersRepository.findById(element.provider_id);

      productsPage.push({
        id: element.id,
        name: element.name,
        categories_name: category.name,
        providers_name: provider.name,
        sell_price: element.sell_price,
        description: element.description,
        buy_price: element.buy_price,
        quantity: element.quantity,
        code: element.code,
      })
    };
    return productsPage;
  };
};

export default FindProductPageService;
