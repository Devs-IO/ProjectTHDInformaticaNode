import CategoriesRepository from '../repositories/CategoriesRepository';
import ProductsRepository from '../repositories/ProductsRepository';
import ProvidersRepository from '../repositories/ProvidersRepository';

interface IProductsPage {
  id: string;
  name: string;
  category: {
    value: string;
    label: string;
  };
  category_id: string;
  provider: {
    value: string;
    label: string;
  };
  provider_id: string;
  sell_price: string;
  buy_price: string;
  description?: string;
  quantity: string;
  code?: string;
  active: boolean;
}

class FindByIdProductService {
  public async execute(id: string) {
    const productsRepository = new ProductsRepository();
    const categoriesRepository = new CategoriesRepository();
    const providersRepository = new ProvidersRepository();

    const product = await productsRepository.findById(id);
    let productsPage: IProductsPage;

    const category = await categoriesRepository.findById(product.category_id);
    const provider = await providersRepository.findById(product.provider_id);

    productsPage = {
      id: product.id,
      name: product.name,
      category: {
        label: category.name,
        value: category.id,
      },
      category_id: category.id,
      provider: {
        label: provider.name,
        value: provider.id,
      },
      provider_id: provider.id,
      sell_price: product.sell_price,
      description: product.description,
      buy_price: product.buy_price,
      quantity: product.quantity,
      code: product.code,
      active: product.active,
    };

    return productsPage;
  }
}

export default FindByIdProductService;
