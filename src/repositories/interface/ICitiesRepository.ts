import ICreateCitiesDTO from "../../dtos/ICreateCitiesDTO";
import Cities from "models/Cities";

export default interface ICitiesRepository {
  create(dataCities: ICreateCitiesDTO): Promise<Cities>;
  find(): Promise<Cities[]>;
}
