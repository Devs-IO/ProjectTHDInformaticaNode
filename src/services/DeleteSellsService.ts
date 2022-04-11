import SellsRepository from "../repositories/SellsRepository";


class DeleteSellsService {
  public async execute(id: string): Promise<void> {
    const sellsRepoditory = new SellsRepository();
    await sellsRepoditory.deleteById(id);
  };
};

export default DeleteSellsService;
