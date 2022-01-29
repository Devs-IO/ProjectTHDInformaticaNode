import ICreateClientDTO from "../../dtos/ICreateClientsDTO";
import Client from "../../models/Client";

export default interface IClientsRepository {
  create(dataClients: ICreateClientDTO): Promise<Client>;
}
