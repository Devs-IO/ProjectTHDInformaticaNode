import { getRepository, Repository } from "typeorm";
import ICreateStatusDTO from "../dtos/ICreateStatusDTO";
import Status from "../models/Status";
import IStatusRepository from "./interface/IStatusRepository";


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

  async findById(id: string): Promise<Status> {
    const status = await this.ormRepository.findOne({
      where: [
        { id },
      ],
    });
    return status!;
  };
};

export default StatusRepository;
