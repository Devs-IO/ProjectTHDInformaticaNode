import CitiesRepository from "../repositories/CitiesRepository";
import ClientsRepository from "../repositories/ClientsRepository";

interface IClientsPage {
  id: string;
  name: string,
  phone: string,
  email: string,
  cpf: string,
  cityName: string,
};

class FindByIdClientsService {

  public async execute(id: string): Promise<IClientsPage> {
    const clientsRepository = new ClientsRepository();
    const citiesRepository = new CitiesRepository();

    const client = await clientsRepository.findById(id);
    const city = await citiesRepository.findById(client.city_id);

    const clientReturn = { ...client, cityName: city.name };

    return clientReturn;
  }
}

export default FindByIdClientsService;
