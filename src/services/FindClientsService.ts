import Client from "../models/Client";
import ClientsRepository from "../repositories/ClientsRepository";

class FindClientsService {

  public async execute(): Promise<Client[]> {

    const clientsRepository = new ClientsRepository();

    let clients = await clientsRepository.find();

    return clients;
  }
}

export default FindClientsService;
