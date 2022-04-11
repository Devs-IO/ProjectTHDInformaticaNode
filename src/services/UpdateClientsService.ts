import ICreateClientDTO from "../dtos/ICreateClientsDTO";
import ClientsRepository from "../repositories/ClientsRepository";

class UpdateClientsService {
  public async execute(data: ICreateClientDTO, id: string): Promise<void> {
    const clientsRepository = new ClientsRepository();
    await clientsRepository.updateById(data, id);
  };
};

export default UpdateClientsService;
