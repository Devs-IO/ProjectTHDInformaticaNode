import SellsRepository from "../repositories/SellsRepository";
import Sells from "../models/Sells";


class FindSellsService {
  public async execute(): Promise<Sells[]> {
    const sellsRepository = new SellsRepository();
    const sells = sellsRepository.find()
    return sells;
  };
};

export default FindSellsService;
