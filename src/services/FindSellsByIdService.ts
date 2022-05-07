import SellsRepository from "repositories/SellsRepository";
import Sells from "../models/Sells";


class FindSellsByIdService {
  public async execute(id:string): Promise<Sells> {
    const sellsRepository = new SellsRepository();
    const sells = await sellsRepository.findById(id);
    return sells;
  };
};

export default FindSellsByIdService;
