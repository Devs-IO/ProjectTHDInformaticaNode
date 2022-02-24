import Clients from "../models/Clients";
import ClientsRepository from "../repositories/ClientsRepository";

class FindClientsService {

  public async execute(): Promise<Clients[]> {
    const clientsRepository = new ClientsRepository();
    let clients = await clientsRepository.find();
    return clients;
  }
}

export default FindClientsService;
