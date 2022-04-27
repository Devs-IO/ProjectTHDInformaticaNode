import { getRepository, Repository } from "typeorm";
import ICreateInstallmentsSellsDTO from "../dtos/ICreateInstallmentsSellsDTO";
import InstallmentsSells from "../models/InstallmentsSells";
import IInstallmentsSellsRepository from "./interface/IInstallmentsSellsRepository";


class InstallmentsSellsRepository implements IInstallmentsSellsRepository {
  private ormRepository: Repository<InstallmentsSells>;

  constructor() {
    this.ormRepository = getRepository(InstallmentsSells);
  };

  async create(dataInstallmentsSells: ICreateInstallmentsSellsDTO): Promise<InstallmentsSells> {
    const installmentsSells = this.ormRepository.create(dataInstallmentsSells);
    return await this.ormRepository.save(installmentsSells);
  };

  async find(): Promise<InstallmentsSells[]> {
    const sells = this.ormRepository.find();
    return sells;
  };

  async findBySellsId(sellsId: string): Promise<InstallmentsSells[] | any[]> {
    const installmentsSells = this.ormRepository.find({
      where: [
        { sells_id: sellsId },
      ],
    });
    return installmentsSells;
  };

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id)
  };

  async deleteBySellsId(id: string): Promise<void> {
    await this.ormRepository.delete({ sells_id: id })
  };

  async updateById(dataSells: ICreateInstallmentsSellsDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataSells);
  };
};

export default InstallmentsSellsRepository;
