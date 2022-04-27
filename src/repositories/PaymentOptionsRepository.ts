import { getRepository, Repository } from "typeorm";
import ICreatePaymentOptionsDTO from "../dtos/ICreatePaymentOptionsDTO";
import PaymentOptions from "../models/PaymentOptions";
import IPaymentOptions from "./interface/IPaymentOptionsRepository";

class PaymentOptionsRepository implements IPaymentOptions {

  private ormRepository: Repository<PaymentOptions>;

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

  async findById(id: string): Promise<PaymentOptions> {
    const payment = await this.ormRepository.findOne({
      where: [
        { id },
      ],
    });
    return payment!;
  };
};

export default PaymentOptionsRepository
