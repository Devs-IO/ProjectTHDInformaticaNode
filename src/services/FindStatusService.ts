import Status from "../models/Status";
import StatusRepository from "../repositories/StatusRepository";


class FindStatusService {
  public async execute(): Promise<Status[]> {
    const statusRepository = new StatusRepository();
    const status = await statusRepository.find();
    return status;
  };
};

export default FindStatusService;
