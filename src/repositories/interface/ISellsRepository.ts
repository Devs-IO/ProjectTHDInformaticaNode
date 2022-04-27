import ICreateSellsDTO from "../../dtos/ICreateSellsDTO";
import Sells from "../../models/Sells";


export default interface ISellsRepository {
  create(dataSells: ICreateSellsDTO): Promise<Sells>;
  find(): Promise<Sells[]>;
  findByClientId(clientId: string): Promise<Sells[] | void>;
  deleteById(id: string): Promise<void>;
  updateById(dataSells: ICreateSellsDTO, id: string): Promise<void>;
  findById(id: string): Promise<Sells>;
};
