import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";

interface ProductData {
  name:string,
  sell_price:string,
  buy_price:string,
  description?:string,
  quantity:string,
  code?:string,
};
// \/ Usar id de categories e providers para criar products
// interface Categories {
//   category:[
//     name:string
//   ];
// };
// interface Providers {
//   provider:[
//     name: string,
//     phone: string,
//     email: string
//   ];
// };

export default class ProductsController{
  public async create( request:Request, response:Response){

    const { ProductData } = request.body;

    const createProductService = new CreateProductService

    const product = await createProductService.execute(ProductData);

    return response.status(201).json(product);

  };
};
