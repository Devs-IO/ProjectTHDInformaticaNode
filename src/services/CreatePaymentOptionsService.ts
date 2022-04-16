import PaymentOptionsRepository from "../repositories/PaymentOptionsRepository";
import PaymentOptions from "../models/PaymentOptions";
import ICreatePaymentOptionsDTO from "../dtos/ICreatePaymentOptionsDTO";


class CreatePaymentOptionsService {
  public async execute (dataPO: ICreatePaymentOptionsDTO):Promise<PaymentOptions> {
    const paymentOptionsRepository = new PaymentOptionsRepository();
    const paymentOption = await paymentOptionsRepository.create(dataPO);
    return paymentOption;
  };
};

export default CreatePaymentOptionsService;
