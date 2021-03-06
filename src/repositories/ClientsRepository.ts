import { getRepository, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateClientsDTO";
import Clients from "../models/Clients";
import IClientsRepository from "./interface/IClientsRepository";

class ClientsRepository implements IClientsRepository {

  private ormRepository: Repository<Clients>;

  constructor() {
    this.ormRepository = getRepository(Clients);
  }

  async create(dataClients: ICreateClientDTO): Promise<Clients> {
    const client = this.ormRepository.create(dataClients);
    await this.ormRepository.save(client);
    return client;
  }

  async findByPEC(phoneData: string, emailData: string, cpfData: string): Promise<Clients | undefined> {
    const clients = await this.ormRepository.findOne({
      where: [
        { phone: phoneData },
        { email: emailData },
        { cpf: cpfData },
      ],
    });
    return clients;
  }

  async find(): Promise<Clients[]> {
    const clients = await this.ormRepository.find();
    return clients;
  }

  async findById(id: string): Promise<Clients> {
    const client = await this.ormRepository.findOne({
      where: [
        { id },
      ],
    });
    return client!;
  }

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  };

  async updateById(dataProduct: ICreateClientDTO, id: string): Promise<void> {
    await this.ormRepository.update(id, dataProduct);
  };

  async findByActive(): Promise<Clients[]> {
    const clients = await this.ormRepository.find({
      where: [
        { active: true }
      ]
    });

    return clients;
  };

  async updateByIdActive(id: string): Promise<void> {
    await this.ormRepository.update(id, { active: false });
  };

}

export default ClientsRepository;
