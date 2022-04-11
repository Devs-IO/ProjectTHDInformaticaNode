import ICreateSellsDTO from "../dtos/ICreateSellsDTO";
import Sells from "../models/Sells";
import SellsRepository from "../repositories/SellsRepository";


class CreateSellsService {
  public async execute(data: ICreateSellsDTO): Promise<Sells> {
    const sellsRepository = new SellsRepository();
    const sells = await sellsRepository.create(data);
    return sells;
  };
};

export default CreateSellsService;
