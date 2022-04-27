import ICreateStatusDTO from "../../dtos/ICreateStatusDTO";
import Status from "../../models/Status";

export default interface IStatusRepository {
  create(dataStatus: ICreateStatusDTO): Promise<Status>;
  find(): Promise<Status[]>;
  findById(id: string): Promise<Status>;
};
