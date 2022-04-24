import ICreateClientDTO from "../../dtos/ICreateClientsDTO";
import Clients from "../../models/Clients";

export default interface IClientsRepository {
  create(dataClients: ICreateClientDTO): Promise<Clients>;
  findById(id: string): Promise<Clients>;
  find(): Promise<Clients[]>;
  deleteById(id: string): Promise<void>;
  updateById(dataProduct: ICreateClientDTO, id: string): Promise<void>;
  findByActive(): Promise<Clients[]>;
}
