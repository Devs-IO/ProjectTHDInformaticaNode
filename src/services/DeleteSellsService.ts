import InstallmentsSellsRepository from "../repositories/InstallmentsSellsRepository";
import ProductsSellsRepository from "../repositories/ProductsSellsRepository";
import SellsRepository from "../repositories/SellsRepository";


class DeleteSellsService {
  public async execute(id: string): Promise<void> {
    const sellsRepository = new SellsRepository();
    const productsSellsRepository = new ProductsSellsRepository();
    const installmentsSellsRepository = new InstallmentsSellsRepository();

    await productsSellsRepository.deleteBySellsId(id);
    await installmentsSellsRepository.deleteBySellsId(id);

    await sellsRepository.deleteById(id);
  };
};

export default DeleteSellsService;
