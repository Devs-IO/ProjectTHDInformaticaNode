import { Request, Response } from "express";
import CreateProductsService from "../services/CreateProductsService";
import DeleteProductService from "../services/DeleteProductService";
import FindProductPageService from "../services/FindProductsPageService";
import FindProductService from "../services/FindProductsService";

export default class ProductsController {
  public async create(request: Request, response: Response) {
    const { name,
      category_id,
      provider_id,
      sell_price,
      buy_price,
      description,
      quantity,
      code } = request.body;

    const createProductsService = new CreateProductsService();

    const product = await createProductsService.execute({
      name,
      category_id,
      provider_id,
      sell_price,
      buy_price,
      description,
      quantity,
      code
    });
    return response.status(201).json(product);
  };

  public async find(request: Request, response: Response) {
    const findProductService = new FindProductService();
    const product = await findProductService.execute();
    return response.status(200).json(product);
  };

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute(id);
    return response.status(204).json({ message: "Deletado com sucesso" });
  };

  public async findProductPage(request: Request, response: Response) {
    const findProductPageService = new FindProductPageService();
    const products = await findProductPageService.execute();
    return response.status(200).json(products);
  };
};
