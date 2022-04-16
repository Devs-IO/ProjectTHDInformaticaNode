import InstallmentsSells from "../models/InstallmentsSells";
import ProductsSells from "../models/ProductsSells";
import Sells from "../models/Sells";
import InstallmentsSellsRepository from "../repositories/InstallmentsSellsRepository";
import ProductsSellsRepository from "../repositories/ProductsSellsRepository";
import SellsRepository from "../repositories/SellsRepository";


class FindSellsService {
  public async execute(): Promise<Sells[]> {
    const sellsRepository = new SellsRepository();
    const installmentsSellsRepository = new InstallmentsSellsRepository();
    const productsSellsRepository = new ProductsSellsRepository();

    let installments: InstallmentsSells[] = [];
    let products: ProductsSells[] = [];

    let sells = await sellsRepository.find();

    if (sells.length > 0) {
      sells = await Promise.all(sells.map(async sell => {
        products = await productsSellsRepository.findBySellsId(sell.id);
        installments = await installmentsSellsRepository.findBySellsId(sell.id);
        return { ...sell, products, installments };
      }));
    }
    return sells;
  };
};

export default FindSellsService;
