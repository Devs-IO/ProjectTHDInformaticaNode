import Cities from "models/Cities";
import CitiesRepository from "../repositories/CitiesRepository";

interface request {
  name: string,
  uf: string,
}

class CreateCitiesService {

  public async execute(data: request): Promise<Cities | undefined> {

    const citiesRepository = new CitiesRepository();

    let cities = await citiesRepository.findByCity(data.name, data.uf);

    if (!cities) {
      cities = await citiesRepository.create(data);
    }

    return cities;
  }
}

export default CreateCitiesService;
