import ICreateInstallmentsSellsDTO from "../dtos/ICreateInstallmentsSellsDTO";
import ICreateProductsSellsDTO from "../dtos/ICreateProductsSellsDTO";
import ICreateSellsDTO from "../dtos/ICreateSellsDTO";
import InstallmentsSells from "../models/InstallmentsSells";
import ProductsSells from "../models/ProductsSells";
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

    let installments: InstallmentsSells[] = [];
    let products: ProductsSells[] = [];

    const sells = await sellsRepository.create(data.sells);


    data.products.forEach(async product => {
      product.sells_id = sells.id;
      const productAnswer = await productsSellsRepository.create(product);
      products.push(productAnswer);
    });

    if (data.installments.length > 0) {
      data.installments.forEach(async installment => {
        installment.sells_id = sells.id;
        const installmentAnswer = await installmentsSellsRepository.create(installment);
        installments.push(installmentAnswer);
      });
    }

    return { sells, products, installments };
  };
};

export default CreateSellsService;
