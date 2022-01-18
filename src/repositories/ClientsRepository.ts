import { getRepository, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateClientsDTO";
import Client from "../models/Client";
import IClientsRepository from "./interface/IClientsRepository";

class ClientsRepository implements IClientsRepository {

  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async create(dataClients: ICreateClientDTO): Promise<Client> {
    const client = this.ormRepository.create(dataClients);
    await this.ormRepository.save(client);
    return client;
  }

}

export default ClientsRepository;
