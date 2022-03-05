import { getRepository, Repository } from "typeorm";
import ICreateClientDTO from "../dtos/ICreateCitiesDTO";
import Cities from "../models/Cities";
import ICitiesRepository from "./interface/ICitiesRepository";

class CitiesRepository implements ICitiesRepository {

  private ormRepository: Repository<Cities>

  constructor() {
    this.ormRepository = getRepository(Cities);
  }

  async create(dataCities: ICreateClientDTO): Promise<Cities> {
    const city = this.ormRepository.create(dataCities);
    await this.ormRepository.save(city);
    return city;
  }

  async findById(id: string): Promise<Cities> {
    const city = await this.ormRepository.findOne({
      where: [
        { id }
      ],
    });
    return city!;
  }

  async findByCity(name: string, uf: string): Promise<Cities> {
    const city = await this.ormRepository.findOne({
      where: [
        {
          name,
          uf
        }
      ],
    });
    return city!;
  }

  async find(): Promise<Cities[]> {
    const cities = await this.ormRepository.find();
    return cities
  }

}

export default CitiesRepository;
