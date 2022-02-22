import { Response, Request } from "express";

import ProductsRepository from "../repositories/ProductsRepository";
import CategoriesRepository from "../repositories/CategoriesRepository";
import ProvidersRepository from "../repositories/ProvidersRepository";

interface categories {
  id: string,
  name: string
}

interface IproductsPage {
  name: string,
  categories_name: string,
  providers_contact_name?: string,
  sell_price: string,
  buy_price: string,
  description?: string,
  quantity: string,
  code?: string,
};

class FindProductPageService {
  public async execute() {

    const productsRepoditory = new ProductsRepository();
    const categoriesRepository = new CategoriesRepository();
    const providersRepository = new ProvidersRepository()

    const products = await productsRepoditory.find()
    // let provider = providersRepository.find();

    const productsPage:IproductsPage[] = []

    products.forEach((element:any) => {
      const productCategory = categoriesRepository.findById(element.category_id)
      const categoryName = productCategory.catch.name
      productsPage.push({
          name: element.name,
          categories_name: categoryName,
          sell_price: element.sell_price,
          buy_price: element.buy_price,
          quantity: element.quantity,
      })
    });
    console.log(productsPage)
  };
};

export default FindProductPageService;
