import ICreateStatusDTO from "../dtos/ICreateStatusDTO";
import Status from "../models/Status";
import StatusRepository from "../repositories/StatusRepository";


class CreateStatusService {
  public async execute(data: ICreateStatusDTO):Promise<Status> {
    const statusRepository = new StatusRepository();
    const status = await statusRepository.create(data);
    return status;
  };
};

export default CreateStatusService;
