import Clients from "../models/Clients";
import ClientsRepository from "../repositories/ClientsRepository";


class FindByActiveClientService {
  public async execute(): Promise<Clients[]> {
    const clientsRepository = new ClientsRepository();
    const clients = clientsRepository.findByActive();
    return clients;
  };
};

export default FindByActiveClientService;
