import { getRepository, Repository } from "typeorm";
import ISellsRepository from "./interface/ISellsRepository";
import Sells from "../models/Sells";
import ICreateSellsDTO from "../dtos/ICreateSellsDTO";


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

  async fidByClientId(clientId: string): Promise<Sells[]|void> {
    const sells = this.ormRepository.find({
      where: [
        {clients_id: clientId},
      ],
    });
    return sells;
  };

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  };

  async updateById(dataSells: ICreateSellsDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataSells);
  };
};

export default SellsRepository;
