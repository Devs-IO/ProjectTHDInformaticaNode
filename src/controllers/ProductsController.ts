import { Request, Response } from "express";
import CreateProductsService from "../services/CreateProductsService";
import DeleteProductService from "../services/DeleteProductService";
import FindByActiveProductsService from "../services/FindByActiveProductsService";
import FindByIdProductService from "../services/FindByIdProductService";
import FindProductService from "../services/FindProductsService";
import UpdateProductsActiveService from "../services/UpdateProductsActiveService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response | void> {
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

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findProductService = new FindProductService();
    const product = await findProductService.execute();
    return response.status(200).json(product);
  };

  public async findById(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const findProductService = new FindByIdProductService();
    const product = await findProductService.execute(id);
    return response.status(200).json(product);
  };

  public async delete(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute(id);
    return response.status(204).json({ message: "successfully deleted" });
  };


  public async update(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const { name,
      category_id,
      provider_id,
      sell_price,
      buy_price,
      description,
      quantity,
      code,
      active } = request.body;
    const updateProductService = new UpdateProductService();
    await updateProductService.execute({
      name,
      category_id,
      provider_id,
      sell_price,
      buy_price,
      description,
      quantity,
      code,
      active
    }, id);
    return response.status(204).json();
  };

  public async findByActive(_:Request, response:Response): Promise<Response | void> {
    const findByActiveProductsService = new FindByActiveProductsService();
    const products = await findByActiveProductsService.execute();
    return response.status(200).json(products);
  };

  public async updateActive(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const updateProductsActiveService = new UpdateProductsActiveService();
    await updateProductsActiveService.execute(id);
    return response.status(204).json({ message: "successfully updated" });
  }
};
