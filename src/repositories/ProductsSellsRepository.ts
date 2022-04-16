import { getRepository, Repository } from "typeorm";
import ICreateProductsSellsDTO from "../dtos/ICreateProductsSellsDTO";
import ProductsSells from "../models/ProductsSells";
import IProductsSellsRepository from "./interface/IProductsSellsRepository";


class ProductsSellsRepository implements IProductsSellsRepository {
  private ormRepository: Repository<ProductsSells>;

  constructor() {
    this.ormRepository = getRepository(ProductsSells);
  };

  async create(dataProductsSells: ICreateProductsSellsDTO): Promise<ProductsSells> {
    const productsSells = this.ormRepository.create(dataProductsSells);
    await this.ormRepository.save(productsSells);
    return productsSells;
  };

  async find(): Promise<ProductsSells[]> {
    const sells = this.ormRepository.find();
    return sells;
  };

  async findBySellsId(sellsId: string): Promise<ProductsSells[]> {
    const ProductsSells = this.ormRepository.find({
      where: [
        { sells_id: sellsId },
      ],
    });
    return ProductsSells;
  };

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  };

  async updateById(dataSells: ICreateProductsSellsDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataSells);
  };
};

export default ProductsSellsRepository;
