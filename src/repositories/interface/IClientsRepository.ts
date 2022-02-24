import ICreateClientDTO from "../../dtos/ICreateClientsDTO";
import Clients from "../../models/Clients";

export default interface IClientsRepository {
  create(dataClients: ICreateClientDTO): Promise<Clients>;
  find(): Promise<Clients[]>;
}
