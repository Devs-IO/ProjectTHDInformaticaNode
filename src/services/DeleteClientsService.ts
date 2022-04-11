import ClientsRepository from "../repositories/ClientsRepository";

class DeleteClientsService {
  public async execute(id: string): Promise<void> {
    const clientsRepository = new ClientsRepository();
    await clientsRepository.deleteById(id);
  }
}

export default DeleteClientsService;
