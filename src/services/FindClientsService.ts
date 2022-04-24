import CitiesRepository from "../repositories/CitiesRepository";
import ClientsRepository from "../repositories/ClientsRepository";

interface IClientsPage {
  name: string,
  phone: string,
  email: string,
  cpf: string,
  city: string,
};

class FindClientsService {

  public async execute(): Promise<IClientsPage[]> {
    const clientsRepository = new ClientsRepository();
    const citiesRepository = new CitiesRepository();
    let clientsPage = [];

    let clients = await clientsRepository.find();

    for (const element of clients) {
      const city = await citiesRepository.findById(element.city_id);

      clientsPage.push({
        id: element.id,
        name: element.name,
        phone: element.phone,
        email: element.email,
        cpf: element.cpf,
        city: city.name,
        active: element.active,
      });
    };
    return clientsPage;
  }
}

export default FindClientsService;
