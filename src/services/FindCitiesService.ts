import Cities from "../models/Cities";
import CitiesRepository from "../repositories/CitiesRepository";

class FindCitiesService {

  public async execute(): Promise<Cities[]> {
    const citiesRepository = new CitiesRepository();
    let cities = await citiesRepository.find();
    return cities;
  }
}

export default FindCitiesService;
