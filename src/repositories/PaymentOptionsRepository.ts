import ICreatePaymentOptionsDTO from "../dtos/ICreatePaymentOptionsDTO";
import { getRepository, Repository } from "typeorm";
import IPaymentOptions from "./interface/IPaymentOptionsRepository";
import PaymentOptions from "models/PaymentOptions";

class PaymentOptionsRepository implements IPaymentOptions {

  private ormRepository: Repository <PaymentOptions>;

  constructor() {
    this.ormRepository = getRepository(PaymentOptions);
  };

  async create(dataPO: ICreatePaymentOptionsDTO): Promise<PaymentOptions> {
    const paymentOptions = this.ormRepository.create(dataPO);
    await this.ormRepository.save(paymentOptions);
    return paymentOptions;
  };

  async find(): Promise<PaymentOptions[]> {
    const paymentOptions = this.ormRepository.find();
    return paymentOptions;
  };
};

export default PaymentOptionsRepository
