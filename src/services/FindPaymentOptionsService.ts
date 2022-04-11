import PaymentOptionsRepository from "../repositories/PaymentOptionsRepository";
import PaymentOptions from "../models/PaymentOptions";



class FindPaymentOptionsService {
  public async execute(): Promise<PaymentOptions[]> {
    const paymentOptionsRepository = new PaymentOptionsRepository();
    const paymentOptions = await paymentOptionsRepository.find();
    return paymentOptions;
  };
};

export default FindPaymentOptionsService;
