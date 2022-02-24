import ICreateClientsDTO from "dtos/ICreateClientsDTO";
import Clients from "../models/Clients";
import ClientsRepository from "../repositories/ClientsRepository";

class CreateClientsService {

  public async execute(data: ICreateClientsDTO): Promise<Clients | undefined> {

    const clientsRepository = new ClientsRepository();
    let client = await clientsRepository.findByPEC(data.phone, data.email, data.cpf);

    if (!client) {
      client = await clientsRepository.create(data);
    }

    return client;
  }
}

export default CreateClientsService;
