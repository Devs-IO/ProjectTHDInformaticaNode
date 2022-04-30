import CitiesRepository from '../repositories/CitiesRepository';
import ClientsRepository from '../repositories/ClientsRepository';

interface IClientsPage {
  id: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  city: {
    value: string;
    label: string;
  };
}

class FindByIdClientsService {
  public async execute(id: string): Promise<IClientsPage> {
    const clientsRepository = new ClientsRepository();
    const citiesRepository = new CitiesRepository();

    const client = await clientsRepository.findById(id);
    const city = await citiesRepository.findById(client.city_id);

    const clientReturn = {
      ...client,
      city: {
        label: city.name,
        value: city.id,
      },
    };

    return clientReturn;
  }
}

export default FindByIdClientsService;
