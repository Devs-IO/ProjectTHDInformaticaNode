import ICreateInstallmentsSellsDTO from "../../dtos/ICreateInstallmentsSellsDTO";
import InstallmentsSells from "../../models/InstallmentsSells";


export default interface IInstallmentsSellsRepository {
  create(dataInstallmentsSells: ICreateInstallmentsSellsDTO): Promise<InstallmentsSells>;
  find(): Promise<InstallmentsSells[]>;
  findBySellsId(sellsId: string): Promise<InstallmentsSells[] | void>;
  deleteById(id: string): Promise<void>;
  updateById(dataInstallmentsSells: ICreateInstallmentsSellsDTO, id: string): Promise<void>;
  deleteBySellsId(id: string): Promise<void>;
};
