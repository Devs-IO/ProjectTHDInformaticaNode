import { Request, Response } from "express";
import CreateProductsService from "../services/CreateProductsService";

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

    const createProductsService = new CreateProductsService

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
};