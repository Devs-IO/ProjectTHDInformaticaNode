import Client from "../models/Client";
import ClientsRepository from "../repositories/ClientsRepository";

interface request {
  name: string,
  phone: string,
  email: string,
  cpf: string,
  city: string,
}

class CreateClientsService {

  public async execute(data: request): Promise<Client> {

    const clientsRepository = new ClientsRepository();

    const client = clientsRepository.create(data);

    return client;
  }
}

export default CreateClientsService;
