import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Products from "../models/Products";
import { getRepository, Repository } from "typeorm";
import IProductsRepository from "./interface/IProductRepository";


class ProductsRepository implements IProductsRepository {

  private ormRepository: Repository<Products>

  constructor() {
    this.ormRepository = getRepository(Products);
  }

  async create (dataProduct:ICreateProductDTO):Promise<Products> {
    const product = this.ormRepository.create(dataProduct);
    await this.ormRepository.save(product)
    return(product)
  }
  async find ():Promise<Products[]>{
    const products = await this.ormRepository.find();
    return products
  }
  async findByName(nameData: string,): Promise<Products | undefined> {

    const product = await this.ormRepository.findOne({
      where: [
        { name: nameData },
      ],
    });

    return product
  }
}

export default ProductsRepository
