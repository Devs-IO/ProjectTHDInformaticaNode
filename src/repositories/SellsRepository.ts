import { getRepository, Repository } from "typeorm";
import ICreateSellsDTO from "../dtos/ICreateSellsDTO";
import Sells from "../models/Sells";
import ISellsRepository from "./interface/ISellsRepository";


class SellsRepository implements ISellsRepository {
  private ormRepository: Repository<Sells>;

  constructor() {
    this.ormRepository = getRepository(Sells)
  };

  async create(dataSells: ICreateSellsDTO): Promise<Sells> {
    const sells = this.ormRepository.create(dataSells);
    await this.ormRepository.save(sells);
    return sells;
  };

  async find(): Promise<Sells[]> {
    const sells = this.ormRepository.find();
    return sells;
  };

  async findByClientId(clientId: string): Promise<Sells[] | any[]> {
    const sells = await this.ormRepository.find({
      where: [
        { clients_id: clientId },
      ],
    });
    return sells;
  };

  async findById(id: string): Promise<Sells> {
    const sell = await this.ormRepository.findOne({
      where: [
        { id },
      ],
    });
    return sell!;
  }

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  };

  async updateById(dataSells: ICreateSellsDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataSells);
  };
};

export default SellsRepository;
