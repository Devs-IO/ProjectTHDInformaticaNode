import IStatusRepository from "./interface/IStatusRepository";
import { getRepository, Repository } from "typeorm";
import Status from "models/Status";
import ICreateStatusDTO from "dtos/ICreateStatusDTO";


class StatusRepository implements IStatusRepository {
  private ormRepository: Repository<Status>;

  constructor() {
    this.ormRepository = getRepository(Status);
  };

  async create(dataStatus: ICreateStatusDTO): Promise<Status> {
    const status = this.ormRepository.create(dataStatus);
    await this.ormRepository.save(status);
    return status;
  };

  async find(): Promise<Status[]> {
    const status = this.ormRepository.find()
    return status;
  };
};

export default StatusRepository;
