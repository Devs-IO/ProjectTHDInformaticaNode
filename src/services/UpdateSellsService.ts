import ICreateSellsDTO from "../dtos/ICreateSellsDTO";
import SellsRepository from "../repositories/SellsRepository";


class UpdateSellsService {
  public async execute(data:ICreateSellsDTO, id:string): Promise<void> {
    const sellsRepository = new SellsRepository();
    await sellsRepository.updateById(data, id);
  };
};

export default UpdateSellsService;
