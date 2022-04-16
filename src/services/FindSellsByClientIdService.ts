import Sells from "models/Sells";
import SellsRepository from "../repositories/SellsRepository";


class FindSellsByClientIdService {
  public async execute(clientId:string): Promise<Sells[]|void> {
    const sellsRepository = new SellsRepository()
    const sells = await sellsRepository.fidByClientId(clientId);
    return sells;
  };
};

export default FindSellsByClientIdService;
