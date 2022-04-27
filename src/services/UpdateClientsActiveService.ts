import ClientsRepository from "../repositories/ClientsRepository";

class UpdateClientsActiveService {
  public async execute(id: string): Promise<void> {
    const clientsRepository = new ClientsRepository();
    await clientsRepository.updateByIdActive(id);
  };
};

export default UpdateClientsActiveService;
