import ICreatePaymentOptionsDTO from "../../dtos/ICreatePaymentOptionsDTO";
import PaymentOptions from "../../models/PaymentOptions";



export default interface IPaymentOptions {
  create(dataPO: ICreatePaymentOptionsDTO): Promise<PaymentOptions>;
  find(): Promise<PaymentOptions[]>;
  findById(id: string): Promise<PaymentOptions>;
};
