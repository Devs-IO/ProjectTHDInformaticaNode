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

  async findByPEC(phoneData: string, emailData: string, cpfData: string): Promise<Client | undefined> {

    const clients = await this.ormRepository.findOne({
      where: [
        { phone: phoneData },
        { email: emailData },
        { cpf: cpfData },
      ],
    });

    return clients
  }

  async find(): Promise<Client[]> {

    const clients = await this.ormRepository.find();

    return clients
  }

}

export default ClientsRepository;
