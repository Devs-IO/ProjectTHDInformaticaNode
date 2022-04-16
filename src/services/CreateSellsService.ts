import ICreateInstallmentsSellsDTO from "../dtos/ICreateInstallmentsSellsDTO";
import ICreateProductsSellsDTO from "../dtos/ICreateProductsSellsDTO";
import ICreateSellsDTO from "../dtos/ICreateSellsDTO";
import InstallmentsSells from "../models/InstallmentsSells";
import InstallmentsSellsRepository from "../repositories/InstallmentsSellsRepository";
import ProductsSellsRepository from "../repositories/ProductsSellsRepository";
import SellsRepository from "../repositories/SellsRepository";


interface request {
  sells: ICreateSellsDTO
  products: ICreateProductsSellsDTO[],
  installments: ICreateInstallmentsSellsDTO[]
}

class CreateSellsService {
  public async execute(data: request): Promise<any> {
    const sellsRepository = new SellsRepository();
    const installmentsSellsRepository = new InstallmentsSellsRepository();
    const productsSellsRepository = new ProductsSellsRepository();

    const sells = await sellsRepository.create(data.sells);


    const products = await Promise.all(data.products.map(async product => {
      product.sells_id = sells.id;
      return await productsSellsRepository.create(product);
    }));

    let installments: InstallmentsSells[] = [];
    if (data.installments.length > 0) {
      installments = await Promise.all(data.installments.map(async installment => {
        installment.sells_id = sells.id;
        return await installmentsSellsRepository.create(installment);
      }));
    }

    return { sells, products, installments };
  };
};

export default CreateSellsService;
