import Clients from "../models/Clients";
import ClientsRepository from "../repositories/ClientsRepository";

interface request {
  name: string,
  phone: string,
  email: string,
  cpf: string,
  city: string,
}

class CreateClientsService {

  public async execute(data: request): Promise<Clients | undefined> {

    const clientsRepository = new ClientsRepository();

    let client = await clientsRepository.findByPEC(data.phone, data.email, data.cpf);

    if (!client) {
      client = await clientsRepository.create(data);
    }

    return client;
  }
}

export default CreateClientsService;
