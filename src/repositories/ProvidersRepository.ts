import ICreateProvidersDTO from "dtos/ICreateProvidersDTO";
import { getRepository, Repository } from "typeorm";
import Providers from "../models/Providers";
import IProvidersRepository from "./interface/IProvidersRepository";

class ProvidersRepository implements IProvidersRepository {
  private ormRepository: Repository<Providers>;

  constructor() {
    this.ormRepository = getRepository(Providers);
  };

  async create(dataProviders: ICreateProvidersDTO): Promise<Providers> {
    const providers = this.ormRepository.create(dataProviders);
    await this.ormRepository.save(providers);
    return providers;
  };

  async find(): Promise<Providers[]> {
    const provider = await this.ormRepository.find();
    return provider;
  };

  async findById(idData: string): Promise<Providers> {
    const provider = await this.ormRepository.findOne({
      where: [
        { id: idData },
      ],
    });
    return provider!;
  };
};

export default ProvidersRepository;
