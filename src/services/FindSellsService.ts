import InstallmentsSells from "../models/InstallmentsSells";
import ProductsSells from "../models/ProductsSells";
import Sells from "../models/Sells";
import ClientsRepository from "../repositories/ClientsRepository";
import InstallmentsSellsRepository from "../repositories/InstallmentsSellsRepository";
import PaymentOptionsRepository from "../repositories/PaymentOptionsRepository";
import ProductsRepository from "../repositories/ProductsRepository";
import ProductsSellsRepository from "../repositories/ProductsSellsRepository";
import SellsRepository from "../repositories/SellsRepository";
import StatusRepository from "../repositories/StatusRepository";

class FindSellsService {
  public async execute(): Promise<Sells[]> {
    const sellsRepository = new SellsRepository();
    const installmentsSellsRepository = new InstallmentsSellsRepository();
    const productsSellsRepository = new ProductsSellsRepository();
    const clientsRepository = new ClientsRepository();
    const productsRepository = new ProductsRepository();
    const statusRepository = new StatusRepository();
    const paymentOptionsRepository = new PaymentOptionsRepository();

    let installments: InstallmentsSells[] = [];
    let products: ProductsSells[] = [];

    let sells = await sellsRepository.find();

    sells = await Promise.all(sells.map(async sell => {

      const client = await clientsRepository.findById(sell.clients_id);
      const status = await statusRepository.findById(sell.status_id);
      const payment_options = await paymentOptionsRepository.findById(sell.payment_options_id);

      products = await productsSellsRepository.findBySellsId(sell.id);

      const productsData = await Promise.all(products.map(async product => {
        const product_ = await productsRepository.findById(product.products_id);
        return {
          id: product.id,
          products_id: product.products_id,
          products_name: product_.name,
          products_price: product_.sell_price,
          quantity: product.quantity,
          value: product.value,
        }
      }));

      installments = await installmentsSellsRepository.findBySellsId(sell.id);

      return {
        ...sell,
        clients_name: client.name,
        status_name: status.paid,
        payment_options_name: payment_options.options,
        productsData,
        installments
      };
    }));

    return sells;
  };
};

export default FindSellsService;
