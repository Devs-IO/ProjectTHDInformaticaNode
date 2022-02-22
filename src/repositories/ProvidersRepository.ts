import Providers from "../models/Providers";
import { getRepository, Repository } from "typeorm";
import IProvidersRepository from "./interface/IProvidersRepository";
import ICreateProvidersDTO from "dtos/ICreateProvidersDTO";

class ProvidersRepository implements IProvidersRepository {
  private ormRepository:Repository <Providers>;

  constructor () {
    this.ormRepository = getRepository(Providers)
  };

  async create(dataProviders: ICreateProvidersDTO): Promise<Providers> {
    const providers = this.ormRepository.create(dataProviders);
    await this.ormRepository.save(providers);
    return providers;
  };

  async find():Promise <Providers[]> {
    const provider = await this.ormRepository.find();
    return provider;
  };
};

export default ProvidersRepository;
