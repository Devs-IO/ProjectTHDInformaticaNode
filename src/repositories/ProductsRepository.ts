import { getRepository, Repository } from "typeorm";
import ICreateProductDTO from "../dtos/ICreateProductsDTO";
import Products from "../models/Products";
import IProductsRepository from "./interface/IProductRepository";


class ProductsRepository implements IProductsRepository {

  private ormRepository: Repository<Products>;

  constructor() {
    this.ormRepository = getRepository(Products);
  };

  async create(dataProduct: ICreateProductDTO): Promise<Products> {
    const product = this.ormRepository.create(dataProduct);
    const products = await this.ormRepository.save(product);
    return products;
  };

  async find(): Promise<Products[]> {
    const products = await this.ormRepository.find();
    return products;
  };

  async findByName(nameData: string): Promise<Products | undefined> {
    const product = await this.ormRepository.findOne({
      where: [
        { name: nameData },
      ],
    });
    return product;
  }

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  };

  async updateById(dataProduct: ICreateProductDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataProduct);
  };

  async findByActive(): Promise<Products[]> {
    const products = this.ormRepository.find({
      where: [
        { active: true }
      ]
    });

    return products;
  };

};

export default ProductsRepository;
